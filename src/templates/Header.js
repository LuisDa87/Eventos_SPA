import { getSession, clearSession } from '../utils/session';

const Sidebar = {
    render: async () => {
        const session = getSession();
        if (!session) return ''; // No renderizar nada si no hay sesión

        // Usamos la API de DiceBear para generar un avatar único basado en el nombre del usuario
        const avatarUrl = `https://api.dicebear.com/7.x/initials/svg?seed=${session.name}`;

        // --- Definición de los enlaces de navegación según el rol ---
        const navLinks = {
            admin: `
                <a href="#/admin/dashboard" class="flex items-center px-4 py-3 text-gray-700 hover:bg-purple-200 rounded-lg">
                    <i data-lucide="layout-dashboard" class="w-5 h-5 mr-3"></i> Dashboard
                </a>
                <a href="#/admin/events" class="flex items-center px-4 py-3 text-gray-700 hover:bg-purple-200 rounded-lg">
                    <i data-lucide="calendar-check" class="w-5 h-5 mr-3"></i> Administrar Eventos
                </a>
                <a href="#/create-event" class="flex items-center px-4 py-3 text-gray-700 hover:bg-purple-200 rounded-lg">
                    <i data-lucide="plus-circle" class="w-5 h-5 mr-3"></i> Crear Evento
                </a>
            `,
            register: `
                <a href="#/" class="flex items-center px-4 py-3 text-gray-700 hover:bg-purple-200 rounded-lg">
                    <i data-lucide="home" class="w-5 h-5 mr-3"></i> Inicio
                </a>
                <a href="#/my-events" class="flex items-center px-4 py-3 text-gray-700 hover:bg-purple-200 rounded-lg">
                    <i data-lucide="calendar-plus" class="w-5 h-5 mr-3"></i> Mis Eventos
                </a>
                <a href="#/my-subscriptions" class="flex items-center px-4 py-3 bg-purple-600 text-white font-bold rounded-lg shadow-lg">
                    <i data-lucide="ticket" class="w-5 h-5 mr-3"></i> Mis Suscripciones
                </a>
            `,
            visitor: `
                <a href="#/" class="flex items-center px-4 py-3 text-gray-700 hover:bg-purple-200 rounded-lg">
                    <i data-lucide="home" class="w-5 h-5 mr-3"></i> Ver Eventos
                </a>
            `
        };

        const view = `
            <div class="w-64 min-h-screen bg-purple-100 p-6 flex flex-col shadow-lg">
                <h1 class="text-2xl font-bold text-purple-800 mb-8">EventManager</h1>
                
                <!-- Perfil de Usuario -->
                <div class="flex items-center mb-10">
                    <img src="${avatarUrl}" alt="Avatar de ${session.name}" class="w-16 h-16 rounded-full border-4 border-purple-200">
                    <div class="ml-4">
                        <h2 class="font-bold text-lg text-gray-800">${session.name}</h2>
                        <p class="text-sm text-purple-700 capitalize">${session.role}</p>
                    </div>
                </div>

                <!-- Navegación Principal -->
                <nav class="flex flex-col space-y-2 flex-grow">
                    ${navLinks[session.role] || navLinks.visitor}
                </nav>

                <!-- Botón de Salir / Iniciar Sesión -->
                <div class="mt-auto">
                    ${session.role !== 'visitor' ? 
                        `<a href="#" id="logout-button" class="flex items-center px-4 py-3 text-gray-700 hover:bg-purple-200 rounded-lg">
                            <i data-lucide="log-out" class="w-5 h-5 mr-3"></i> Salir
                         </a>` :
                        `<a href="#/login" class="flex items-center justify-center bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-lg shadow-lg transition">
                            <i data-lucide="log-in" class="w-5 h-5 mr-3"></i> Iniciar Sesión
                         </a>`
                    }
                </div>
            </div>
        `;
        return view;
    },
    after_render: async () => {
        // Reemplaza los placeholders de iconos con los SVG reales de Lucide Icons
        lucide.createIcons();

        // El listener para el botón de logout solo se añade si el botón existe
        const logoutButton = document.getElementById('logout-button');
        if (logoutButton) {
            logoutButton.addEventListener('click', (e) => {
                e.preventDefault();
                clearSession();
            });
        }
    }
};

export default Sidebar;