# Generador de grafos de dependencias DDS

Esta herramienta permite cargar una lista de producciones con reglas semanticas, generar un unico grafo de dependencias para toda la DDS cargada y obtener un orden de evaluacion por orden topologico.

## Como iniciar

Opcion recomendada:

1. Ejecutar `iniciar.bat`.
2. Se abrira el navegador en `http://127.0.0.1:5178`.
3. Para cerrar el servidor, ejecutar `parar.bat`.

Tambien se puede abrir `index.html` directamente en el navegador, pero el modo con `iniciar.bat` es mas estable.

## Formato de entrada

Cada bloque empieza con una produccion:

```txt
E -> E1 + T
```

Debajo se escriben las reglas semanticas:

```txt
E.val = E1.val + T.val
```

Ejemplo completo:

```txt
E -> E1 + T
  E.val = E1.val + T.val

T -> digito
  T.val = digito.lexval
```

## Reglas para escribir atributos

Los atributos deben escribirse con punto:

```txt
Simbolo.atributo
```

Ejemplos validos:

```txt
E.val
E1.val
T.tipo
L.her
digito.lexval
id.entrada
```

Si un simbolo aparece mas de una vez en una produccion, se recomienda numerarlo:

```txt
E -> E1 + T
  E.val = E1.val + T.val
```

## Acciones semanticas

Tambien se aceptan acciones sin asignacion. La herramienta las modela como nodos de accion.

```txt
D -> T L
  L.her = T.tipo

L -> id
  addtipo(id.entrada, L.her)
```

En ese caso, la accion depende de los atributos que usa.

## Que genera

La herramienta muestra:

- reglas semanticas detectadas;
- atributos de los que depende cada regla;
- un unico grafo de dependencias;
- un unico orden de evaluacion global;
- aviso si hay ciclos.

## Limitaciones

La herramienta no construye automaticamente un Parse Tree completo para una cadena de entrada. Sirve para estudiar las formulas del capitulo: si una regla tiene forma `b = f(c1, c2, ..., ck)`, entonces el grafo contiene aristas desde cada `ci` hacia `b`.

Todas las reglas cargadas se integran en el mismo grafo global. Si el mismo atributo aparece en varias reglas, por ejemplo `E.val`, se representa como el mismo nodo. En gramaticas recursivas puede aparecer un ciclo en el grafo global; eso indica que para obtener un orden concreto normalmente se necesita trabajar sobre ocurrencias concretas del Parse Tree.
