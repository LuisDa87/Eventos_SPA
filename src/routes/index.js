import Header from '../templates/Header'; // Mantenemos el nombre de la importación
import HomePage from '../pages/HomePage';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Error404 from '../pages/Error404';
import AdminDashboard from '../pages/AdminDashboard';
import AdminEvents from '../pages/AdminEvents';
import EventForm from '../pages/EventForm';
import MyEvents from '../pages/MyEvents';
import MySubscriptions from '../pages/MySubscriptions';

import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';
import { getSession } from '../utils/session';

const routes = {
    '/': HomePage,
    '/login': Login,
    '/register': Register,
    '/admin/dashboard': AdminDashboard,
    '/admin/events': AdminEvents,
    '/my-events': MyEvents,
    '/my-subscriptions': MySubscriptions,
    '/create-event': EventForm,
    '/edit-event/:id': EventForm,
};

const router = async () => {
    // Apuntamos a los nuevos contenedores del layout
    const sidebarContainer = document.getElementById('sidebar');
    const contentContainer = document.getElementById('content');
    
    let hash = getHash();
    let route = await resolveRoutes(hash);

    // Rutas que no deben mostrar la barra lateral
    const routesWithoutSidebar = ['/login', '/register'];

    if (routesWithoutSidebar.includes(route)) {
        sidebarContainer.innerHTML = ''; // Ocultamos la barra lateral
        sidebarContainer.classList.add('hidden');
        contentContainer.classList.add('w-full');
    } else {
        // Para todas las demás rutas, mostramos la barra lateral
        sidebarContainer.innerHTML = await Header.render(); // Header ahora es nuestra barra lateral
        await Header.after_render();
        sidebarContainer.classList.remove('hidden');
        contentContainer.classList.remove('w-full');
    }
    
    // --- GUARDIÁN DE RUTAS (sin cambios en la lógica) ---
    const session = getSession();
    const adminRoutes = ['/admin/dashboard', '/admin/events'];
    const registerRoutes = ['/my-events', '/my-subscriptions'];
    const sharedProtectedRoutes = ['/create-event', '/edit-event/:id'];

    let authorized = true;
    let requiredRole = '';

    if (adminRoutes.includes(route)) {
        if (!session || session.role !== 'admin') {
            authorized = false;
            requiredRole = 'Administrador';
        }
    } else if (registerRoutes.includes(route)) {
        if (!session || session.role !== 'register') {
            authorized = false;
            requiredRole = 'Usuario Registrado';
        }
    } else if (sharedProtectedRoutes.includes(route)) {
        if (!session || (session.role !== 'admin' && session.role !== 'register')) {
            authorized = false;
            requiredRole = 'Administrador o Usuario Registrado';
        }
    }
    
    if (!authorized) {
        alert(`Acceso denegado. Necesitas ser ${requiredRole} para acceder a esta página.`);
        window.location.hash = '/';
        return;
    }

    let page = routes[route] ? routes[route] : Error404;

    contentContainer.innerHTML = await page.render();
    if (page.after_render) {
        await page.after_render();
    }
};

export default router;