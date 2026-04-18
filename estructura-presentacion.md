# Estructura de la presentación

1. Portada
   Tema: Traducción Dirigida por la Sintaxis

2. Ruta de la exposición
   Cómo vamos a desarrollar el capítulo 5

3. Bloque 1
   Definiciones dirigidas por la sintaxis

4. DDS: concepto base
   Gramática + atributos + reglas semánticas

5. Alcance de una DDS
   Qué permite construir o calcular

6. Forma de una DDS
   Dependencias entre atributos

7. Tipos de atributos
   Sintetizados y heredados

8. Grafo y orden de evaluación
   Dependencias, orden topológico y ciclos

9. Grafos de dependencias, algoritmo
   Cómo construir el grafo

10. Grafos de dependencias, ejemplo
    Lectura del caso de declaraciones

11. Bloque 2
    Construcción de árboles sintácticos

12. AST
    El parser puede producir una estructura útil

13. Construcción de expresiones
    Funciones típicas para expresiones

14. Árbol sintáctico abstracto
    Forma condensada del árbol de análisis

15. Construcción del AST
    Relación con la traducción a forma posfija

16. DDS para construir AST
    Apuntadores al árbol real

17. Bloque 3
    Evaluación ascendente de atributos sintetizados

18. Parsing LR
    Cálculo en reduce

19. Atributos en la pila del analizador
    Valores semánticos asociados a la pila

20. Bloque 4
    Definiciones con atributos por la izquierda

21. L-atribuidas
    Flujo desde el padre o desde la izquierda

22. L-atribuidas, contraejemplo
    Caso que no es por la izquierda

23. L-atribuidas, caso seguro
    Cuando todos los atributos son sintetizados

24. Esquemas de traducción
    Acciones semánticas dentro de la gramática

25. Esquemas de traducción, restricciones
    Ubicación correcta de las acciones

26. Bloque 5
    Traducción descendente

27. Eliminación de recursión por la izquierda
    Adaptación para descenso recursivo

28. Traductor predictivo
    Heredados en descenso recursivo

29. Traducción descendente y propagación
    Reescritura semántica de atributos

30. Diseño de un traductor predictivo
    Pasos generales de construcción

31. Bloque 6
    Evaluación ascendente de atributos heredados

32. Heredados en LR
    Marcadores y pila del analizador

33. Acciones intercaladas
    Transformación con marcadores

34. Herencia de atributos en la pila
    Contexto leído y escrito en el stack

35. Simulación de heredados
    Evaluación anticipada con marcadores

36. Bloque 7
    Evaluadores recursivos

37. Evaluadores recursivos
    Funciones sobre árbol explícito

38. Recorridos de izquierda a derecha
    Implantación de DDS L-atribuidas

39. Otros recorridos
    Orden alternativo cuando el árbol ya existe

40. Bloque 8
    Consideraciones de espacio

41. Memoria para atributos
    Duración de valores

42. Asignación de espacio
    Minimización de registros

43. Evitar copias
    Reutilización directa de registros

44. Cierre
    Síntesis del capítulo

45. Bibliografía
    Libro base y material de apoyo
