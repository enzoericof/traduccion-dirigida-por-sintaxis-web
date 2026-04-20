# Gráficos sugeridos para la presentación

Base: Capítulo 5 recortado en PDF

La idea es que tú hagas screenshot de estas figuras o reglas y luego me pases las imágenes para integrarlas bien en la presentación.

## Prioridad alta

1. `5.1 Definiciones dirigidas por la sintaxis`
   Página 6 del PDF recortado.
   Buscar la figura del árbol con el atributo heredado `L.her` propagando el tipo.
   Sirve para las diapositivas de atributos heredados y ejemplo de declaraciones.

2. `5.1 Grafo de dependencias`
   Páginas 7-8 del PDF recortado.
   Buscar el ejemplo donde aparecen dependencias, falsos atributos y el orden de evaluación.
   Sirve para reforzar la parte de grafo y orden topológico.

3. `5.2 Construcción de árboles sintácticos`
   Página 12 del PDF recortado.
   Buscar la figura/regla donde aparecen `haznodo` y `hazhoja`.
   Esta es de las mejores capturas para la parte de construcción de AST.

4. `5.3 Evaluación ascendente`
   Página 19 del PDF recortado.
   Buscar el ejemplo de evaluación LR con la entrada `3*5+4` y la pila/valores.
   Sirve muchísimo para explicar por qué los sintetizados encajan tan bien con reduce.

5. `5.4 Orden de evaluación en profundidad`
   Página 20 del PDF recortado.
   Buscar `Fig. 5.18` con `visitaprof`.
   Conviene ponerla cerca de atributos por la izquierda o evaluadores recursivos.

6. `5.5 Traducción descendente`
   Página 29 del PDF recortado.
   Buscar `Fig. 5.28`, el esquema transformado para construir árboles sintácticos.
   Es una captura clave porque conecta recursión eliminada, heredados y AST.

7. `5.5 Traductor predictivo`
   Página 32 del PDF recortado.
   Buscar `Fig. 5.31`, construcción por descenso recursivo de árboles sintácticos.
   Muy buena para la slide del traductor predictivo.

8. `5.6 Heredados en LR`
   Páginas 34-35 del PDF recortado.
   Buscar `Fig. 5.32` o la figura con la pila `estado/val`.
   Esta es la mejor evidencia visual para explicar marcadores y herencia en LR.

9. `5.8 Paso del tipo y memoria`
   Página 45 del PDF recortado.
   Buscar `Fig. 5.42`, paso del tipo a identificadores en una declaración.
   Sirve para unir atributos heredados con uso de memoria.

10. `5.8 Asignación de registros`
    Página 46 del PDF recortado.
    Buscar `Fig. 5.44`, asignación de valores de atributos a registros.
    Esta captura queda excelente en la parte final de espacio y reutilización.

## Prioridad media

1. `5.2 DAG / GDA`
   Páginas 14-16 del PDF recortado.
   Si quieres mostrar optimización de nodos repetidos, conviene capturar la parte del DAG.

2. `5.4 Ejemplo no L-atribuido`
   Página 21 del PDF recortado.
   Sirve para mostrar un contraejemplo real del libro.

3. `5.5 Dos formas de calcular un valor de atributo`
   Página 28 del PDF recortado.
   Buscar `Fig. 5.27`.
   Puede servir si quieres hacer más fuerte la transición entre el esquema original y el transformado.

## Reglas y gramáticas que conviene capturar

1. Regla de evaluación con expresiones aritméticas del inicio de `5.1`.
   Página 5 del PDF recortado.
   Útil para mostrar cómo `T.val` depende de los hijos.

2. Reglas de `haznodo` y `hazhoja`.
   Página 12 del PDF recortado.
   Ideal para la sección de AST.

3. Esquema de traducción con recursión por la izquierda.
   Página 26 del PDF recortado.
   Sirve para comparar con la versión transformada.

4. Esquema transformado para descenso recursivo.
   Página 29 del PDF recortado.
   Es probablemente la regla más importante del bloque 5.

5. Patrón con marcadores en evaluación ascendente de heredados.
   Página 33 del PDF recortado.
   Muy útil para que la parte de `5.6` no quede abstracta.

## Recomendación práctica

Si me vas pasando primero estas cinco capturas, ya puedo dejar la presentación en un nivel mucho mejor:

1. Figura de `L.her` con declaraciones.
2. Grafo de dependencias con falsos atributos.
3. Reglas `haznodo` / `hazhoja`.
4. Ejemplo LR con pila y reducciones.
5. Figura de marcadores y pila para heredados en LR.
