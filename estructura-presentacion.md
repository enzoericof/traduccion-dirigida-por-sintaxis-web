# Estructura de la presentación

Presentación de **Compiladores** sobre **Traducción Dirigida por la Sintaxis**.

Total actual: **48 diapositivas**.

## Mapa de diapositivas

| N.º | ID | Bloque | Tema |
| --- | --- | --- | --- |
| 1 | `slide-1` | Portada | Traducción Dirigida por la Sintaxis |
| 2 | `slide-2` | Organización | Los primeros ocho subcapítulos del capítulo 5 guían toda la exposición |
| 3 | `slide-2a` | Idea previa | Antes de 5.1: primero veremos DDS y después esquemas de traducción |
| 4 | `slide-3` | 5.1 | Definiciones dirigidas por la sintaxis |
| 5 | `slide-4` | Concepto base | Una DDS es gramática + atributos + reglas semánticas |
| 6 | `slide-5` | Forma de una DDS | Las reglas semánticas definen dependencias entre atributos |
| 7 | `slide-6` | Atributos | Sintetizados y heredados: dos direcciones de flujo |
| 8 | `slide-6a` | Atributos en el Parse Tree | Ejemplos visuales: sintetizados vs. heredados |
| 9 | `slide-7` | Dependencias y evaluación | Del grafo de dependencias al orden topológico |
| 10 | `slide-7a` | Grafos de dependencias | Procedimiento para construir el grafo |
| 11 | `slide-8` | 5.2 | Construcción de árboles sintácticos |
| 12 | `slide-8a` | Parse Tree vs AST | Definiciones formales y diferencias esenciales |
| 13 | `slide-8b` | Mismo ejemplo | La misma expresión vista como Parse Tree y como AST |
| 14 | `slide-9` | AST | El Parse Tree suele ser demasiado detallado y por eso conviene construir un AST |
| 15 | `slide-10` | Ejemplo de construcción | La construcción formal del AST se apoya en `haznodo` y `hazhoja` |
| 16 | `slide-10c` | DDS para AST | Así se arma el AST paso a paso usando el atributo sintetizado `apn` |
| 17 | `slide-10d` | AST y GDA | Una DDS también puede construir grafos dirigidos acíclicos para compartir subexpresiones |
| 18 | `slide-11` | Bloque 3 | Evaluación ascendente de atributos sintetizados |
| 19 | `slide-12` | 5.3 | Evaluación ascendente de definiciones con atributos sintetizados |
| 20 | `slide-12a` | Pila LR enriquecida | El parser puede guardar estado y valor semántico en paralelo |
| 21 | `slide-12b` | Reducción | Los atributos del lado derecho se leen desde posiciones del tope |
| 22 | `slide-12c` | Ejemplo | Calculadora de escritorio con analizador LR |
| 23 | `slide-13` | 5.4 | Definiciones con atributos por la izquierda |
| 24 | `slide-14` | Definición | El orden de evaluación queda unido al orden del análisis sintáctico |
| 25 | `slide-14b` | Contraejemplo | Una dependencia hacia la derecha rompe la condición L-atribuida |
| 26 | `slide-15` | Esquemas de traducción | Una gramática puede llevar acciones semánticas dentro de sus producciones |
| 27 | `slide-15b` | Ejemplo de esquema | De expresiones infijas a postfijas imprimiendo acciones en el recorrido |
| 28 | `slide-15c` | Ubicación de acciones | Una acción solo puede usar atributos que ya fueron calculados |
| 29 | `slide-15d` | De DDS a esquema | Las reglas L-atribuidas indican dónde insertar cada acción semántica |
| 30 | `slide-16` | 5.5 | Traducción descendente |
| 31 | `slide-17` | LL y recursión | Eliminar recursión por la izquierda para poder traducir en descenso |
| 32 | `slide-17b` | Conservación semántica | La gramática cambia, pero el significado de la expresión debe seguir siendo el mismo |
| 33 | `slide-18` | Traductor predictivo | En descenso recursivo, los heredados encajan de forma natural |
| 34 | `slide-19` | 5.6 | Evaluación ascendente de atributos heredados |
| 35 | `slide-20` | Heredados en LR | La solución clásica es usar marcadores y aprovechar la pila |
| 36 | `slide-20b` | Interpretación de la pila | El marcador no agrega significado nuevo: solo adelanta el momento de ejecutar la acción |
| 37 | `slide-21` | 5.7 | Evaluadores recursivos |
| 38 | `slide-22` | Evaluadores recursivos | Las funciones recursivas evalúan atributos recorriendo un árbol ya construido |
| 39 | `slide-22a` | Recorridos de izquierda a derecha | Una DDS por la izquierda puede implantarse con funciones recursivas similares a las predictivas |
| 40 | `slide-22b` | Ejemplo | DDS para determinar tamaño y altura de fórmulas |
| 41 | `slide-22c` | Lectura del ejemplo | La función simula las reglas semánticas de cada producción |
| 42 | `slide-22d` | Otros recorridos | Con un árbol explícito, los hijos pueden visitarse en cualquier orden necesario |
| 43 | `slide-22e` | Función para otros recorridos | El evaluador puede cambiar el orden de visita según la producción usada |
| 44 | `slide-23` | 5.8 | Consideraciones de espacio para valores de atributos |
| 45 | `slide-24` | Memoria | Los valores viven solo mientras alguien los necesita |
| 46 | `slide-24b` | Ejemplo de reutilización | Un mismo registro temporal puede servir para varios atributos en distintos momentos |
| 47 | `slide-25` | Resumen | Síntesis del capítulo |
| 48 | `slide-26` | Bibliografía | Fuentes bibliográficas |

## Resumen por bloques

| Bloque | Diapositivas | Enfoque |
| --- | --- | --- |
| Apertura | 1-3 | Portada, recorrido general y diferencia entre DDS y esquemas de traducción. |
| 5.1 | 4-10 | Definición de DDS, atributos, dependencias, grafos y orden de evaluación. |
| 5.2 | 11-17 | Construcción de árboles sintácticos, diferencia Parse Tree/AST, `haznodo`, `hazhoja`, `apn` y GDA. |
| 5.3 | 18-22 | Evaluación ascendente de atributos sintetizados con pila LR y reducciones. |
| 5.4 | 23-29 | Definiciones con atributos por la izquierda y esquemas de traducción. |
| 5.5 | 30-33 | Traducción descendente, recursión por la izquierda y traductor predictivo. |
| 5.6 | 34-36 | Evaluación ascendente de atributos heredados con marcadores y pila. |
| 5.7 | 37-43 | Evaluadores recursivos y recorridos sobre árboles ya construidos. |
| 5.8 | 44-46 | Consideraciones de espacio, vida útil de atributos y reutilización de registros. |
| Cierre | 47-48 | Síntesis conceptual y bibliografía. |
