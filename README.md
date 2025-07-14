Gestor de Eventos - Single Page Application
EventManager es una aplicación web de página única (SPA) diseñada para la gestión y visualización de eventos. Construida con JavaScript puro, esta plataforma permite a los usuarios explorar, crear y administrar eventos de diversas categorías, ofreciendo funcionalidades específicas según el rol del usuario.
✨ Características Principales
El sistema cuenta con tres roles de usuario con diferentes niveles de permisos:
👤 Rol Administrador
 * Control Total: Acceso completo para crear, editar y eliminar todos los eventos de la plataforma.
 * Dashboard Analítico: Visualización de estadísticas clave como el número total de eventos, eventos próximos y usuarios registrados.
 * Gestión Centralizada: Panel para ver y administrar todos los eventos en un solo lugar.
✍️ Rol Registrado
 * Creación de Eventos Propios: Los usuarios registrados pueden crear y publicar sus propios eventos.
 * Gestión Personal: Panel "Mis Eventos" para editar o eliminar únicamente los eventos que han creado.
 * Suscripción a Eventos: Posibilidad de inscribirse a eventos de otros usuarios y ver sus suscripciones en un panel dedicado.
👁️ Rol Visitante
 * Exploración Pública: Visualización de todos los eventos publicados en la plataforma.
 * Navegación Libre: Acceso de solo lectura a la página principal y los detalles de los eventos.
 * Llamada a la Acción: Interfaz clara con botones para iniciar sesión o registrarse y acceder a más funcionalidades.
🛠️ Tecnologías Utilizadas
Este proyecto fue construido utilizando un stack de tecnologías modernas de frontend:
 * JavaScript (ES6+): Lógica principal de la aplicación.
 * Webpack 5: Empaquetador de módulos para compilar y optimizar el código.
 * Babel: Transpilador para asegurar la compatibilidad del código JavaScript con navegadores antiguos.
 * json-server: Para simular una API RESTful y una base de datos local a partir de un archivo db.json.
 * Tailwind CSS: Framework de CSS "utility-first" para un diseño rápido y moderno.
 * Lucide Icons: Librería de iconos SVG ligera y personalizable.
🚀 Instalación y Puesta en Marcha
Sigue estos pasos para configurar y ejecutar el proyecto en tu entorno local.
Prerrequisitos
Asegúrate de tener instalado Node.js (que incluye npm) en tu sistema.
Pasos de Instalación
 * Clona el repositorio:
   git clone https://github.com/tu-usuario/tu-repositorio.git
cd tu-repositorio

 * Instala las dependencias del proyecto:
   Este comando leerá el archivo package.json e instalará todas las librerías necesarias (Webpack, Babel, etc.).
   npm install

 * Ejecuta los servidores:
   Para que la aplicación funcione correctamente, necesitas ejecutar dos servidores al mismo tiempo en terminales separadas.
   * En la primera terminal, inicia el servidor de la base de datos simulada:
     Este comando vigilará el archivo db.json y servirá los datos en http://localhost:4000.
     npm run json:server

   * En la segunda terminal, inicia el servidor de desarrollo de Webpack:
     Este comando compilará el proyecto, lo servirá en http://localhost:8080 y se recargará automáticamente cada vez que hagas un cambio en el código.
     npm start

 * ¡Listo! Abre tu navegador y visita http://localhost:8080 para ver la aplicación en funcionamiento.
📜 Scripts Disponibles
En el archivo package.json encontrarás los siguientes scripts:
 * npm start: Inicia el servidor de desarrollo de Webpack con recarga en caliente.
 * npm run build: Compila y empaqueta la aplicación para producción. Los archivos optimizados se guardarán en la carpeta dist/.
 * npm run json:server: Inicia json-server para simular la API en el puerto 4000.
📂 Estructura del Proyecto
/
├── dist/               # Archivos de producción generados por Webpack.
├── node_modules/       # Dependencias del proyecto.
├── public/
│   └── index.html      # Plantilla HTML principal.
├── src/
│   ├── pages/          # Componentes de página (HomePage, Login, AdminDashboard, etc.).
│   ├── templates/      # Componentes reutilizables (Header/Sidebar).
│   ├── utils/          # Funciones de ayuda (getData, getHash, etc.).
│   ├── index.js        # Punto de entrada principal de la aplicación.
├── .gitignore          # Archivos y carpetas ignorados por Git.
├── db.json             # Base de datos simulada para json-server.
├── package.json        # Manifiesto del proyecto y dependencias.
├── README.md           # Este archivo.
└── webpack.config.js   # Configuración de Webpack.

✒️ Autor
Luis David Ducuara
 * GitHub: @LuisDa87
📄 Licencia
Este proyecto está bajo la Licencia MIT.