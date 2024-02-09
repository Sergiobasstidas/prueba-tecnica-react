---
runme:
  id: 01HNX1FDHYRJW6R4BC2CK5DKK3
  version: v2.2
---

##  Game of Thrones Books Explorer 

Game of Thrones Books Explorer es una aplicación web construida con React y Vite que te sumerge en el fascinante mundo de la serie de libros "A Song of Ice and Fire" (Canción de Hielo y Fuego) de George R.R. Martin, popularizada por la serie de televisión Game of Thrones.

Mejoras Futuras:
Servicios de Sesión de Usuario: Implementar servicios de sesión de usuario para personalizar la experiencia, permitiendo a los usuarios guardar y gestionar sus libros favoritos.

### Funcionalidades Principales:

Explorar Libros: Descubre los libros de la serie, con detalles como el país de origen, autor, número de páginas, ISBN, fecha de lanzamiento, y más.

Detalles de Libros: Obtén información detallada sobre cada libro, incluyendo sinopsis, fecha de lanzamiento y calificación de usuarios.

Favoritos: Guarda tus libros favoritos para acceder fácilmente a ellos más tarde y llevar un seguimiento de tus preferencias literarias.

### Tecnologías Clave Utilizadas
- **React y Vite**: React proporciona una interfaz de usuario dinámica, mientras que Vite asegura un entorno de desarrollo rápido para una experiencia de desarrollo eficiente.

- **React-Bootstrap**: Utilizado para estilizar y organizar componentes de manera coherente, garantizando una interfaz atractiva y receptiva para los usuarios.

- **Axios**: Maneja de manera efectiva las solicitudes HTTP a la API de Game of Thrones para obtener y mostrar información sobre los libros, asegurando una comunicación fluida con la fuente de datos.

- **@tanstack/react-table**: Facilita la gestión avanzada de tablas, proporcionando una visualización eficiente y organizada de los datos de los libros, mejorando la experiencia de navegación.

- **Moment.js**: Simplifica las operaciones relacionadas con fechas y horarios, mejorando la legibilidad y eficiencia del código, especialmente útil para presentar la información temporal de manera clara.

- **React Toastify**: Proporciona notificaciones visuales claras y atractivas para comunicar eventos importantes de manera no intrusiva, mejorando la retroalimentación del usuario.

- **Jest**: Framework de pruebas que facilita la escritura y ejecución de pruebas unitarias para garantizar la calidad y robustez del código.



### Mejoras Pendientes
Algunas mejoras que podrían implementarse en futuras versiones incluyen:

- **Servicios de Sesión de Usuario:** Implementar servicios de sesión de usuario para proporcionar una experiencia personalizada. Esto permitiría a los usuarios guardar sus libros favoritos, configurar preferencias y acceder a funcionalidades exclusivas mediante un sistema de autenticación y registro.

  Lo implementaria de manera sencilla por el tiempo, considerando la integración de un servicio de autenticación como Firebase Authentication. Esto proporcionaría una solución rápida y efectiva para la gestión de sesiones de usuario.



#### ¿Qué harías de manera diferente si se le asignara más tiempo?
Si contara con más tiempo, consideraría las siguientes mejoras:

- **Autenticación y Autorización**: Implementar un sistema de autenticación y autorización robusto para proteger las rutas y proporcionar una experiencia personalizada basada en el usuario.

- **Base de Datos en Backend**: Mover la lógica de datos a un backend con una base de datos, lo que permitiría almacenar y recuperar libros de forma persistente.

- **Mejoras de UI/UX**: Refinar y mejorar la interfaz de usuario para una experiencia más agradable y centrada en el usuario.

### Decisión de Opciones Técnicas y Arquitectónicas
Las decisiones técnicas y arquitectónicas de la aplicación fueron cuidadosamente seleccionadas para garantizar un desarrollo eficiente y una experiencia de usuario mejorada:

- **React y Vite**:
React y Vite fueron seleccionados para impulsar el desarrollo de la interfaz de usuario. React ofrece una programación declarativa y componentizada, facilitando la construcción de una interfaz dinámica. Vite complementa esta elección al proporcionar un entorno de desarrollo rápido, mejorando la eficiencia y permitiendo una experiencia de desarrollo ágil.

- **Axios para Gestión de Peticiones HTTP:**
La elección de Axios como biblioteca para la gestión de peticiones HTTP se fundamenta en su sintaxis clara y concisa, junto con su capacidad para manejar promesas y gestionar errores de manera efectiva. Esto simplifica la lógica de red, mejora la estructura del código y proporciona funcionalidades adicionales, como la cancelación de peticiones, esenciales para una experiencia de usuario fluida y eficiente.


- **React-Bootstrap:**
La elección de React-Bootstrap se basa en la necesidad de estilizar y organizar los componentes de manera coherente. Este marco ofrece un conjunto de herramientas que facilitan la creación de una interfaz atractiva y receptiva para los usuarios, asegurando una experiencia visualmente coherente en toda la aplicación.


- **@tanstack/react-table:**
@tanstack/react-table se elige para facilitar la gestión avanzada de tablas, permitiendo una visualización eficiente y organizada de los datos de los libros. Esta elección mejora la experiencia de navegación al proporcionar una interfaz de usuario estructurada y fácil de entender.

- **Jest:**
Jest se elige como framework de pruebas para facilitar la escritura y ejecución de pruebas unitarias. Esta herramienta asegura la calidad y robustez del código al permitir la creación de pruebas de manera eficiente, garantizando un código fiable y funcional.

- **Moment.js para el Manejo de Fechas:**
La incorporación de Moment.js se basa en la necesidad de gestionar operaciones complejas relacionadas con fechas y horarios. Moment.js simplifica estas tareas, mejorando la legibilidad del código y proporcionando una forma más intuitiva y eficiente de trabajar con información temporal.


- **React Toastify para Notificaciones Visuales:**
La inclusión de React Toastify se justifica por su capacidad para ofrecer notificaciones visuales claras y atractivas en la interfaz de usuario. Estas notificaciones son cruciales para comunicar eventos importantes o errores de manera no intrusiva. Toastify proporciona una solución elegante y fácil de usar, permitiendo la personalización de las notificaciones y controlando su duración. Esta mejora contribuye significativamente a una experiencia de usuario más informativa y profesional.

En general, cada elección técnica se basó en la eficiencia, la claridad del código y la mejora de la experiencia del usuario. La combinación de Moment.js, Axios y React Toastify asegura un desarrollo robusto y una aplicación que proporciona información de manera clara y atractiva a los usuarios.

## Instalación y ejecución

Asegúrate de tener [Node.js](https://nodejs.org/) instalado en tu máquina.

1. Clona este repositorio:

   ```bash
   git clone https://tu-repositorio.git

2. Navega al directorio del proyecto
   cd game-of-thrones-books-explorer

3. Instala las dependencias:
   npm install

4. Inicia la aplicación:
   npm run dev

Este comando utiliza Vite para iniciar el servidor de desarrollo y compilar tu aplicación. Luego, puedes abrir tu navegador y acceder a la URL proporcionada en la terminal, por lo general, http://localhost:3000 para ver tu aplicación en acción.

Asegúrate de que tu entorno tenga Node.js y npm instalados y que hayas ejecutado npm install previamente para instalar todas las dependencias necesarias.
