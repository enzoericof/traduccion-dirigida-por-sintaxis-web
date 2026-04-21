const defaultInput = `# Calculadora de expresiones con atributos sintetizados
# Cada bloque empieza con una produccion.
# Las reglas semanticas van debajo.

L -> E n
  L.val = E.val

E -> E1 + T
  E.val = E1.val + T.val

E -> T
  E.val = T.val

T -> T1 * F
  T.val = T1.val * F.val

T -> F
  T.val = F.val

F -> ( E )
  F.val = E.val

F -> digito
  F.val = digito.lexval`;

const source = document.querySelector("#source");
const output = document.querySelector("#output");
const summary = document.querySelector("#summary");
const messages = document.querySelector("#messages");
const template = document.querySelector("#graphTemplate");

source.value = defaultInput;

document.querySelector("#analyze").addEventListener("click", runAnalysis);
document.querySelector("#clear").addEventListener("click", () => {
  source.value = "";
  renderEmpty();
});
document.querySelector("#loadExample").addEventListener("click", () => {
  source.value = defaultInput;
  runAnalysis();
});

runAnalysis();

function runAnalysis() {
  const parsed = parseSource(source.value);
  renderMessages(parsed.errors);

  if (!parsed.productions.length) {
    renderEmpty("No hay producciones para analizar.");
    renderSummary(null);
    return;
  }

  const analysis = analyzeGlobal(parsed.productions);
  renderSummary(analysis);
  renderGlobalGraph(analysis);
}

function parseSource(text) {
  const lines = text.split(/\r?\n/);
  const productions = [];
  const errors = [];
  let current = null;

  lines.forEach((raw, index) => {
    const lineNumber = index + 1;
    const withoutComment = raw.replace(/\s+#.*$/, "");
    const line = withoutComment.trim();

    if (!line || line.startsWith("#")) return;

    if (line.includes("->")) {
      const parts = line.split("->");
      if (parts.length !== 2 || !parts[0].trim() || !parts[1].trim()) {
        errors.push(`Linea ${lineNumber}: produccion invalida.`);
        return;
      }
      current = {
        lhs: parts[0].trim(),
        rhs: parts[1].trim(),
        source: line,
        lineNumber,
        rules: [],
      };
      productions.push(current);
      return;
    }

    if (!current) {
      errors.push(`Linea ${lineNumber}: regla semantica sin produccion previa.`);
      return;
    }

    current.rules.push({ text: line, lineNumber });
  });

  return { productions, errors };
}

function analyzeGlobal(productions) {
  const graph = {
    nodes: new Map(),
    edges: [],
  };

  const rules = [];
  productions.forEach((production) => {
    production.rules.forEach((rule) => {
      rules.push(parseRule(rule, rules.length + 1, graph, production));
    });
  });
  const topo = topologicalSort(graph);

  return {
    productions,
    rules,
    graph,
    topo,
  };
}

function parseRule(rule, ruleIndex, graph, production) {
  const assignment = splitAssignment(rule.text);

  if (assignment) {
    const targetLabel = assignment.left;
    const target = targetLabel;
    const depLabels = extractAttributes(assignment.right).filter((dep) => dep !== targetLabel);
    const deps = depLabels;
    addNode(graph, target, "attribute", targetLabel, production.source);
    deps.forEach((dep, index) => {
      addNode(graph, dep, "attribute", depLabels[index], production.source);
      addEdge(graph, dep, target, rule.text);
    });
    return {
      kind: "assignment",
      label: rule.text,
      target,
      deps,
      depLabels,
      targetLabel,
      lineNumber: rule.lineNumber,
      production: production.source,
    };
  }

  const actionId = `accion${ruleIndex}`;
  const depLabels = extractAttributes(rule.text);
  const deps = depLabels;
  addNode(graph, actionId, "action", `accion ${ruleIndex}: ${shorten(rule.text, 42)}`);
  deps.forEach((dep, index) => {
    addNode(graph, dep, "attribute", depLabels[index], production.source);
    addEdge(graph, dep, actionId, rule.text);
  });

  return {
    kind: "action",
    label: rule.text,
    target: actionId,
    deps,
    depLabels,
    targetLabel: actionId,
    lineNumber: rule.lineNumber,
    production: production.source,
  };
}

function splitAssignment(text) {
  const match = text.match(/^(.+?)(:=|=)(.+)$/);
  if (!match) return null;
  return {
    left: match[1].trim(),
    right: match[3].trim(),
  };
}

function extractAttributes(text) {
  const matches = text.match(/[A-Za-z][A-Za-z0-9_']*\.[A-Za-z_][A-Za-z0-9_]*/g) || [];
  return [...new Set(matches)];
}

function addNode(graph, id, kind, label = id, production = "") {
  if (!graph.nodes.has(id)) {
    graph.nodes.set(id, { id, label, kind, production });
  }
}

function addEdge(graph, from, to, rule) {
  const key = `${from}->${to}`;
  if (!graph.edges.some((edge) => edge.key === key)) {
    graph.edges.push({ key, from, to, rule });
  }
}

function topologicalSort(graph) {
  const nodes = [...graph.nodes.keys()];
  const indegree = new Map(nodes.map((node) => [node, 0]));
  const adjacency = new Map(nodes.map((node) => [node, []]));

  graph.edges.forEach((edge) => {
    adjacency.get(edge.from).push(edge.to);
    indegree.set(edge.to, indegree.get(edge.to) + 1);
  });

  const queue = nodes.filter((node) => indegree.get(node) === 0);
  const order = [];

  while (queue.length) {
    const node = queue.shift();
    order.push(node);
    adjacency.get(node).forEach((next) => {
      indegree.set(next, indegree.get(next) - 1);
      if (indegree.get(next) === 0) queue.push(next);
    });
  }

  const cycle = order.length !== nodes.length;
  const remaining = nodes.filter((node) => !order.includes(node));
  return { order, cycle, remaining };
}

function renderMessages(errors) {
  messages.innerHTML = "";
  errors.forEach((error) => {
    const div = document.createElement("div");
    div.className = "message";
    div.textContent = error;
    messages.appendChild(div);
  });
}

function renderSummary(analysis) {
  const empty = {
    productions: [],
    rules: [],
    graph: { nodes: new Map(), edges: [] },
    topo: { cycle: false },
  };
  const current = analysis || empty;

  summary.innerHTML = "";
  [
    ["Producciones", current.productions.length],
    ["Reglas", current.rules.length],
    ["Nodos", current.graph.nodes.size],
    ["Aristas", current.graph.edges.length],
    ["Ciclos", current.topo.cycle ? 1 : 0],
  ].forEach(([label, value]) => {
    const div = document.createElement("div");
    div.className = "summary-item";
    div.innerHTML = `<strong>${value}</strong><span>${label}</span>`;
    summary.appendChild(div);
  });
}

function renderGlobalGraph(analysis) {
  output.innerHTML = "";
  const node = template.content.cloneNode(true);

  const status = node.querySelector(".status-pill");
  status.textContent = analysis.topo.cycle ? "Ciclo detectado" : "Orden valido";
  status.classList.toggle("error", analysis.topo.cycle);

  const rulesList = node.querySelector(".rules-list");
  analysis.rules.forEach((rule) => {
    const li = document.createElement("li");
    const deps = rule.depLabels.length ? rule.depLabels.map((dep) => `<code>${dep}</code>`).join(", ") : "sin dependencias";
    li.innerHTML = `<code>${escapeHtml(rule.production)}</code><br><code>${escapeHtml(rule.label)}</code><br><small>depende de: ${deps}</small>`;
    rulesList.appendChild(li);
  });

  const orderList = node.querySelector(".order-list");
  const order = analysis.topo.cycle ? analysis.topo.order.concat(analysis.topo.remaining) : analysis.topo.order;
  if (!order.length) {
    orderList.innerHTML = "<li>No hay atributos ni acciones detectadas.</li>";
  } else {
    order.forEach((item) => {
      const li = document.createElement("li");
      const graphNode = analysis.graph.nodes.get(item);
      li.innerHTML = `<code>${escapeHtml(graphNode?.label || item)}</code>`;
      orderList.appendChild(li);
    });
  }

  node.querySelector(".graph").appendChild(renderGraph(analysis.graph, analysis.topo));
  output.appendChild(node);
}

function renderGraph(graph, topo) {
  const nodes = [...graph.nodes.values()];
  if (!nodes.length) {
    const div = document.createElement("div");
    div.className = "empty";
    div.textContent = "Esta produccion no tiene atributos detectables.";
    return div;
  }

  const order = topo.cycle ? nodes.map((node) => node.id) : topo.order;
  const layer = computeLayers(graph, order, topo.cycle);
  const layers = groupByLayer(nodes, layer);
  const layerCount = Math.max(1, layers.length);
  const width = Math.max(820, layerCount * 230);
  const maxLayerSize = Math.max(...layers.map((items) => items.length));
  const height = Math.max(260, maxLayerSize * 92 + 80);
  const positions = new Map();

  layers.forEach((items, layerIndex) => {
    const x = layerCount === 1 ? width / 2 : 90 + layerIndex * ((width - 180) / (layerCount - 1));
    const verticalGap = height / (items.length + 1);
    items.forEach((node, itemIndex) => {
      positions.set(node.id, { x, y: verticalGap * (itemIndex + 1) });
    });
  });

  const svg = createSvg("svg");
  svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
  svg.setAttribute("role", "img");
  svg.setAttribute("aria-label", "Grafo de dependencias");

  const defs = createSvg("defs");
  defs.innerHTML = `
    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="rgba(47, 102, 197, 0.58)"></polygon>
    </marker>`;
  svg.appendChild(defs);

  graph.edges.forEach((edge) => {
    const from = positions.get(edge.from);
    const to = positions.get(edge.to);
    if (!from || !to) return;
    const path = createSvg("path");
    const dx = Math.max(60, Math.abs(to.x - from.x) / 2);
    path.setAttribute("class", "edge");
    path.setAttribute("marker-end", "url(#arrowhead)");
    path.setAttribute("d", `M ${from.x + 58} ${from.y} C ${from.x + dx} ${from.y}, ${to.x - dx} ${to.y}, ${to.x - 58} ${to.y}`);
    svg.appendChild(path);
  });

  nodes.forEach((node) => {
    const pos = positions.get(node.id);
    const group = createSvg("g");
    group.setAttribute("class", `node ${node.kind}`);
    group.setAttribute("transform", `translate(${pos.x - 70}, ${pos.y - 22})`);

    const rect = createSvg("rect");
    rect.setAttribute("width", "140");
    rect.setAttribute("height", "44");
    rect.setAttribute("rx", "14");

    const text = createSvg("text");
    text.setAttribute("x", "70");
    text.setAttribute("y", "27");
    text.setAttribute("text-anchor", "middle");
    text.textContent = shorten(node.label, 18);

    group.append(rect, text);
    svg.appendChild(group);
  });

  return svg;
}

function computeLayers(graph, order, hasCycle) {
  const layer = new Map([...graph.nodes.keys()].map((node) => [node, 0]));
  if (hasCycle) {
    [...graph.nodes.keys()].forEach((node, index) => layer.set(node, index % 4));
    return layer;
  }

  order.forEach((node) => {
    graph.edges
      .filter((edge) => edge.to === node)
      .forEach((edge) => {
        layer.set(node, Math.max(layer.get(node), layer.get(edge.from) + 1));
      });
  });
  return layer;
}

function groupByLayer(nodes, layer) {
  const max = Math.max(...nodes.map((node) => layer.get(node.id)));
  return Array.from({ length: max + 1 }, (_, index) =>
    nodes.filter((node) => layer.get(node.id) === index)
  );
}

function renderEmpty(message = "Carga una gramatica para empezar.") {
  output.innerHTML = `<div class="panel empty">${message}</div>`;
}

function createSvg(tag) {
  return document.createElementNS("http://www.w3.org/2000/svg", tag);
}

function escapeHtml(text) {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function shorten(text, max) {
  return text.length > max ? `${text.slice(0, max - 1)}...` : text;
}
