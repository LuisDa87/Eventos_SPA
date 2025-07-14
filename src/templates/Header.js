import { getSession, clearSession } from '../utils/session';

const Header = { // Mantenemos el nombre Header para no romper importaciones
    render: async () => {
        const session = getSession();
        
        // --- VISTA PARA VISITANTES (SIN SESIÓN) ---
        if (!session) {
            return `
                <div class="w-64 min-h-screen bg-purple-100 p-6 flex flex-col shadow-lg">
                    <h1 class="text-2xl font-bold text-purple-800 mb-8">EventManager</h1>
                    <div class="text-center mb-10">
                        <i data-lucide="users" class="w-20 h-20 mx-auto text-purple-400"></i>
                        <h2 class="font-bold text-lg text-gray-800 mt-4">Visitante</h2>
                        <p class="text-sm text-purple-700">Explora los eventos</p>
                    </div>
                    <nav class="flex flex-col space-y-4 flex-grow">
                         <a href="#/login" class="flex items-center justify-center bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-lg shadow-lg transition">
                            <i data-lucide="log-in" class="w-5 h-5 mr-3"></i> Iniciar Sesión
                         </a>
                         <a href="#/register" class="flex items-center justify-center bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-4 rounded-lg shadow-lg transition">
                            <i data-lucide="user-plus" class="w-5 h-5 mr-3"></i> Registrarse
                         </a>
                    </nav>
                </div>
            `;
        }

        // --- VISTA PARA USUARIOS LOGUEADOS (ADMIN / REGISTER) ---
        const avatarUrl = `https://api.dicebear.com/7.x/initials/svg?seed=${session.name}`;
        const navLinks = {
            admin: `
                <a href="#/admin/dashboard" class="flex items-center px-4 py-3 text-gray-700 hover:bg-purple-200 rounded-lg"><i data-lucide="layout-dashboard" class="w-5 h-5 mr-3"></i> Dashboard</a>
                <a href="#/admin/events" class="flex items-center px-4 py-3 text-gray-700 hover:bg-purple-200 rounded-lg"><i data-lucide="calendar-check" class="w-5 h-5 mr-3"></i> Administrar Eventos</a>
                <a href="#/create-event" class="flex items-center px-4 py-3 text-gray-700 hover:bg-purple-200 rounded-lg"><i data-lucide="plus-circle" class="w-5 h-5 mr-3"></i> Crear Evento</a>
            `,
            register: `
                <a href="#/" class="flex items-center px-4 py-3 text-gray-700 hover:bg-purple-200 rounded-lg"><i data-lucide="home" class="w-5 h-5 mr-3"></i> Inicio</a>
                <a href="#/my-events" class="flex items-center px-4 py-3 text-gray-700 hover:bg-purple-200 rounded-lg"><i data-lucide="calendar-plus" class="w-5 h-5 mr-3"></i> Mis Eventos</a>
                <a href="#/my-subscriptions" class="flex items-center px-4 py-3 text-gray-700 hover:bg-purple-200 rounded-lg"><i data-lucide="ticket" class="w-5 h-5 mr-3"></i> Mis Suscripciones</a>
            `
        };

        return `
            <div class="w-64 min-h-screen bg-purple-100 p-6 flex flex-col shadow-lg">
                <h1 class="text-2xl font-bold text-purple-800 mb-8">EventManager</h1>
                <div class="flex items-center mb-10">
                    <img src="${avatarUrl}" alt="Avatar" class="w-16 h-16 rounded-full border-4 border-purple-200">
                    <div class="ml-4">
                        <h2 class="font-bold text-lg text-gray-800">${session.name}</h2>
                        <p class="text-sm text-purple-700 capitalize">${session.role}</p>
                    </div>
                </div>
                <nav class="flex flex-col space-y-2 flex-grow">
                    ${navLinks[session.role]}
                </nav>
                <div class="mt-auto">
                    <a href="#" id="logout-button" class="flex items-center px-4 py-3 text-gray-700 hover:bg-purple-200 rounded-lg">
                        <i data-lucide="log-out" class="w-5 h-5 mr-3"></i> Salir
                    </a>
                </div>
            </div>
        `;
    },
    after_render: async () => {
        lucide.createIcons();
        const logoutButton = document.getElementById('logout-button');
        if (logoutButton) {
            logoutButton.addEventListener('click', (e) => {
                e.preventDefault();
                clearSession();
            });
        }
    }
};

export default Header;