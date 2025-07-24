.
UselesslyTrue
Una landing page interactiva y estilizada para mostrar datos inútiles pero verdaderos. Permite al usuario obtener datos aleatorios y guardarlos como favoritos con una interfaz inspirada en ventanas de sistema operativo retro.

🚀 ¿Qué hace este proyecto?
Muestra un fun fact aleatorio (contenido por agregar desde JS).

Permite guardar favoritos con un botón de corazón.

Tiene una sección modal para mostrar los facts guardados.

Estéticamente está inspirado en una GUI con cajas de colores y botones tipo ventana.

Diseño responsive 🌈.

🧩 Estructura del proyecto
index.html: estructura principal.

landing.css (SCSS): todos los estilos están aquí, organizados con variables, mixins y media queries.

landing.js: (módulo JS que deberías tener aparte) controlará la lógica de random/fav.

Assets/: contiene íconos, logos y decoraciones visuales (corazones, redes sociales, personaje rosa).

🖼 Diseño visual
🎨 Colores clave: verde menta, rosa chicle, gris claro, amarillo brillante.

🧱 Layout flexible basado en flexbox y mixins SCSS.

Animaciones suaves: shake para interacciones, modal para favoritos añadidos.

Responsive para móviles y tablets (media queries detalladas).

🧠 Features Técnicas
SCSS bien estructurado: variables, funciones px-to-rem, mixins reutilizables.

Componentes reutilizables (cardContainer, grayBox, pinkBox).

Accesibilidad base (uso de alt en imágenes, botones interactivos).

Modular JS (type="module").

🛠️ A mejorar o completar
Conectar el botón Randomize a una API o base de datos de hechos.

Guardar favoritos en localStorage o backend.

Activar animación de corazón (actualmente comentada).

Incluir el archivo JS (landing.js) real.
