# Estructura de la presentación

Basada en el capítulo 5, subcapítulos `5.1` a `5.8`.

1. Portada  
   Tema: Traducción Dirigida por la Sintaxis

2. Índice general  
   Recorrido por los subcapítulos 5.1 a 5.8

3. Subcapítulo 5.1  
   Definiciones dirigidas por la sintaxis

4. DDS: concepto base  
   Gramática + atributos + reglas semánticas

5. Forma de una DDS  
   Dependencias entre atributos

6. Tipos de atributos  
   Sintetizados y heredados

7. Grafo y orden de evaluación  
   Dependencias, orden topológico y ciclos

8. Procedimiento para construir el grafo  
   Construcción del grafo, falsos atributos y ejemplo de declaraciones

9. Subcapítulo 5.2  
   Construcción de árboles sintácticos

10. Parse Tree vs AST  
    Definiciones formales y tabla comparativa

11. Parse Tree vs AST, ejemplo visual  
    La misma expresión vista como Parse Tree y como AST

12. AST  
    El parser puede producir un AST útil

13. Construcción de expresiones  
    Funciones típicas y ejemplo de AST

14. DDS para construir AST  
    Apuntadores al AST y regla semántica de construcción

15. Subcapítulo 5.3  
    Evaluación ascendente de definiciones con atributos

16. Parsing LR  
    La pila, la reducción y el cálculo semántico

17. Ejemplo guiado de LR  
    Precedencia y cálculo sobre `3 + 5 * 2`

18. Subcapítulo 5.4  
    Definiciones con atributos por la izquierda

19. L-atribuidas  
    Reglas permitidas y no permitidas

20. Ejemplo de declaraciones tipadas  
    Propagación del tipo hacia la lista de identificadores

21. Esquemas de traducción  
    Acciones semánticas dentro de la gramática

22. Usos típicos de un esquema  
    Posfija, AST y código intermedio

23. Subcapítulo 5.5  
    Traducción descendente

24. Eliminación de recursión por la izquierda  
    Adaptación para descenso recursivo

25. Conservación semántica  
    Acumuladores heredados y preservación del significado

26. Traductor predictivo  
    Heredados en descenso recursivo y construcción durante el recorrido

27. Subcapítulo 5.6  
    Evaluación ascendente de atributos heredados

28. Heredados en LR  
    Marcadores, pila y disparo controlado de acciones

29. Interpretación del marcador  
    Cómo adelanta el contexto sin cambiar la cadena reconocida

30. Subcapítulo 5.7  
    Evaluadores recursivos

31. Evaluadores recursivos  
    Recorridos sobre Parse Tree explícito

32. Órdenes de recorrido  
    Postorden, izquierda-derecha y recorrido guiado por dependencias

33. Subcapítulo 5.8  
    Consideraciones de espacio para valores de atributos

34. Memoria para atributos  
    Duración de valores, registros y copias

35. Reutilización de registros  
    Ejemplo de vida útil y reciclaje de temporales

36. Cierre  
    Síntesis conceptual del capítulo

37. Bibliografía  
    Capítulo 5 y material bibliográfico de apoyo
