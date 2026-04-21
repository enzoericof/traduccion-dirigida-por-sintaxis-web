# Estructura de la presentación

Basada en el capítulo 5, subcapítulos `5.1` a `5.8`.

1. Portada  
   Tema: Traducción Dirigida por la Sintaxis

2. Índice general  
   Recorrido por los subcapítulos 5.1 a 5.8

Nota previa al subcapítulo 5.1  
   Dos formas de traducir: primero DDS y luego esquemas de traducción

3. Subcapítulo 5.1  
   Definiciones dirigidas por la sintaxis

4. DDS: concepto base  
   Gramática + atributos + reglas semánticas

5. Forma de una DDS  
   Dependencias entre atributos

6. Tipos de atributos  
   Sintetizados y heredados, con apoyo visual de calculadora y declaraciones

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
    El Parse Tree suele ser demasiado detallado y por eso se construye un AST útil

13. Construcción de expresiones  
    Funciones `haznodo` / `hazhoja` como base formal para construir el AST

14. DDS para construir AST  
    Atributo `apn`, secuencia de construcción y regla semántica paso a paso

15. AST y GDA  
    Subexpresiones comunes, GDA y método del número de valor

16. Subcapítulo 5.3  
    Evaluación ascendente de definiciones con atributos

17. Parsing LR  
    La pila, la reducción y el cálculo semántico

18. Ejemplo guiado de LR  
    Precedencia y cálculo sobre `3 + 5 * 2`

19. Subcapítulo 5.4  
    Definiciones con atributos por la izquierda

20. L-atribuidas  
    Reglas permitidas y no permitidas

21. Ejemplo de declaraciones tipadas  
    Propagación del tipo hacia la lista de identificadores

22. Esquemas de traducción  
    Acciones semánticas dentro de la gramática

23. Usos típicos de un esquema  
    Tabla de símbolos, AST y código intermedio

24. Subcapítulo 5.5  
    Traducción descendente

25. Eliminación de recursión por la izquierda  
    Adaptación para descenso recursivo

26. Conservación semántica  
    Acumuladores heredados y preservación del significado

27. Traductor predictivo  
    Heredados en descenso recursivo y construcción durante el recorrido

28. Subcapítulo 5.6  
    Evaluación ascendente de atributos heredados

29. Heredados en LR  
    Marcadores, pila y disparo controlado de acciones

30. Interpretación del marcador  
    Cómo adelanta el contexto sin cambiar la cadena reconocida

31. Subcapítulo 5.7  
    Evaluadores recursivos

32. Evaluadores recursivos  
    Recorridos sobre Parse Tree explícito

33. Órdenes de recorrido  
    Postorden, izquierda-derecha y recorrido guiado por dependencias

34. Subcapítulo 5.8  
    Consideraciones de espacio para valores de atributos

35. Memoria para atributos  
    Duración de valores, registros y copias

36. Reutilización de registros  
    Ejemplo de vida útil y reciclaje de temporales

37. Cierre  
    Síntesis conceptual del capítulo

38. Bibliografía  
    Capítulo 5 y material bibliográfico de apoyo
