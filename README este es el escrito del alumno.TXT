GENERADOR DE CUENTOS ALEATORIOS - PROYECTO LOW COUPLING -  ANGEL FABIAN GUTIERREZ GOMEZ - 2023371093
====================================================================================================

DESCRIPCIÓN
-----------
Programa que genera cuentos cortos aleatorios combinando personajes, problemas y soluciones de manera única. Cada cuento sigue una estructura predefinida pero con elementos variables que cambian en cada generación (Funcionalidad que puede ser fácilmente escalable, en serio).

ESTRUCTURA DEL PROYECTO
-----------------------
low-coupling/
├── src/
│   ├── components/
│   │   ├── StoryGenerator.jsx    (Interfaz de usuario)
│   │   └── StoryDisplay.jsx      (Muestra los cuentos)
│   ├── patterns/
│   │   ├── StoryBuilder.js       (Patrón Builder)
│   │   ├── StoryGenerator.js     (Patrón Template Method)
│   │   └── StoryIterator.js      (Patrón Iterator)
│   ├── data/
│   │   └── stories.js            (Patrón Flyweight)
│   ├── App.jsx                   (Componente principal)
│   └── main.jsx                  (Punto de entrada)

PATRONES DE DISEÑO IMPLEMENTADOS
--------------------------------

1. LOW COUPLING
-----------------------------------
Se aplica en toda la arquitectura del proyecto:

- Los archivos están separados por responsabilidades
- Cada módulo tiene una única función específica
- Los cambios en un archivo no afectan a los otros
- Ejemplo: Si cambio los datos en stories.js, no necesito modificar la lógica en StoryGenerator.js (es buen ejemplo, creo...)

ARCHIVOS DONDE SE APLICA:
- Todos los archivos trabajan juntos con dependencias mínimas
- La comunicación entre componentes es through interfaces claras

2. PATRÓN BUILDER (CONSTRUCTOR)
-------------------------------
ARCHIVO: src/patterns/StoryBuilder.js

FUNCIÓN: Construye el cuento paso a paso como un rompecabezas.

CÓMO FUNCIONA:
- addIntroduction()   → Añade la introducción del personaje
- addProblem()        → Añade el problema de la historia  
- addSolution()       → Añade la solución del conflicto
- build()             → Une todas las partes y devuelve el cuento completo

VENTAJA: Permite crear cuentos complejos de forma organizada y flexible.

3. PATRÓN FLYWEIGHT
--------------------------------
ARCHIVO: src/data/stories.js

FUNCIÓN: Compartir información común entre múltiples objetos.

CÓMO FUNCIONA:
- characterTypes: Define tipos de personajes (héroe, villano, etc.)
- problemTypes: Define tipos de problemas (dragón, maldición, etc.)
- Los personajes individuales hacen referencia a estos tipos compartidos

EJEMPLO:
Goku y Superman comparten el mismo tipo "héroe", evitando duplicar la descripción para ahorrar movimientos (pura reutilización papá).


4. PATRÓN ITERATOR (ITERADOR)
-----------------------------
ARCHIVO: src/patterns/StoryIterator.js

FUNCIÓN: Acceder a elementos de una colección sin saber cómo está organizada.

MÉTODOS:
- getRandom()    → Devuelve un elemento aleatorio
- getFirst()     → Devuelve el primer elemento  
- getLast()      → Devuelve el último elemento
- getAtIndex()   → Devuelve el elemento en una posición específica

VENTAJA: Si cambio arrays por objetos, solo debo modificar el Iterator, no todo el código.

5. PATRÓN TEMPLATE METHOD
----------------------------------------------
ARCHIVO: src/patterns/StoryGenerator.js

FUNCIÓN: Definir la estructura base de un algoritmo con partes variables.

CÓMO FUNCIONA:
- generateStory() → Esqueleto fijo que siempre sigue los mismos pasos
- selectCharacter() → Método que puede variar (selección aleatoria)
- selectProblem()   → Método que puede variar (selección aleatoria)
- Las subclases pueden cambiar cómo se seleccionan los elementos

SUBCLASES IMPLEMENTADAS:
- ComedyStoryGenerator: Para cuentos de comedia
- FantasyStoryGenerator: Para cuentos de fantasía  
- MemeStoryGenerator: Para cuentos con memes y humor de internet

VENTAJA: Mantiene la estructura consistente mientras permite variaciones.

CÓMO EJECUTAR EL PROYECTO
-------------------------
1. Instalar dependencias: npm install
2. Ejecutar en desarrollo: "npm run dev" o "npm start" (lo que funcione primero jeje)
3. Abrir en el navegador: http://localhost:3000 (sí usa los puertos default, sino tal vez le abra otro o no le abra)

CÓMO USAR
---------
1. Seleccionar el tipo de cuento (normal, comedia, fantasía, memes)
2. Hacer clic en "Generar Cuento"
3. Leer la historia generada aleatoriamente
4. Generar nuevo cuento para obtener una historia diferente


TECNOLOGÍAS UTILIZADAS
----------------------
- JavaScript ES6+
- CSS3 para estilos (Puedo usar el css mejor que esto)


NOTA DEL SUPER ESTUDIANTE
------------------------------
Con todo gusto podría implementar un pequeño formulario para poder agregar distintos personajes, problemáticas más originales o simplemente características más moldeables para el cuento. Me gustó el proyecto, pero es un proyecto del que otro ya creado (por no decir que me copié la idea), además de que usé "herramientas" para poder implementar de la manera más eficiente y CORRECTA los patrones y la plantilla que se me fueron asignados

(PROYECTO TERMINADO A LAS 4:57am -- README TERMINADO 5:45am)