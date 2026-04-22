# Traducción Dirigida por la Sintaxis

Presentación web de la materia **Compiladores** sobre **Traducción Dirigida por la Sintaxis**.

Total actual: **48 diapositivas**.

## Qué cubre

La exposición sigue el capítulo 5 entre los subcapítulos `5.1` y `5.8`. El recorrido empieza con definiciones dirigidas por la sintaxis, atributos y grafos de dependencias; después pasa a construcción de árboles sintácticos, evaluación ascendente, definiciones con atributos por la izquierda, traducción descendente, atributos heredados en LR, evaluadores recursivos y consideraciones de espacio.

## Mapa rápido

| Bloque | Diapositivas | Tema |
| --- | --- | --- |
| Apertura | 1-3 | Portada, índice general y diferencia entre DDS y esquemas de traducción. |
| 5.1 | 4-10 | DDS, reglas semánticas, atributos sintetizados/heredados, grafos y orden topológico. |
| 5.2 | 11-17 | Parse Tree vs AST, construcción con `haznodo`/`hazhoja`, atributo `apn` y GDA. |
| 5.3 | 18-22 | Evaluación ascendente de atributos sintetizados usando pila LR. |
| 5.4 | 23-29 | Definiciones con atributos por la izquierda y esquemas de traducción. |
| 5.5 | 30-33 | Traducción descendente, recursión por la izquierda y traductor predictivo. |
| 5.6 | 34-36 | Evaluación ascendente de atributos heredados con marcadores. |
| 5.7 | 37-43 | Evaluadores recursivos y recorridos sobre árboles ya construidos. |
| 5.8 | 44-46 | Espacio para atributos, vida útil de valores y reutilización de registros. |
| Cierre | 47-48 | Resumen conceptual y bibliografía. |

## Archivos principales

- `index.html`: presentación principal.
- `styles.css`: estilos visuales de las diapositivas.
- `favicon.svg`: favicon de la pestaña.
- `estructura-presentacion.md`: listado completo de las 48 diapositivas.
- `imagenes/`: capturas y figuras usadas en la presentación.
- `generador-grafos-dds/`: programa auxiliar para cargar producciones/reglas y generar grafo de dependencias.

## Cómo abrir

Abrir `index.html` en un navegador.

## Base bibliográfica

- Aho, Lam, Sethi y Ullman. **Compiladores: Principios, técnicas y herramientas**.
- Material de apoyo de la materia sobre traducción dirigida por la sintaxis.
