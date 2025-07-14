/**
 * Transforma una ruta de la URL en una plantilla de ruta que coincida con nuestro objeto de rutas.
 * Esta versión es más robusta y maneja múltiples segmentos en la URL.
 * @param {string} route - La ruta obtenida de getHash(), ej: '/edit-event/123'.
 * @returns {string} La plantilla de ruta, ej: '/edit-event/:id'.
 */
const resolveRoutes = (route) => {
    // Si la ruta es la raíz, la devolvemos tal cual.
    if (route === '/') {
        return route;
    }
    // Divide la ruta en segmentos. Ej: '/edit-event/123' -> ['', 'edit-event', '123']
    const segments = route.split('/');
    
    // Comprueba si el último segmento es un número.
    // Si es así, asumimos que es una ruta con un ID dinámico.
    // Reconstruimos la ruta reemplazando el ID con el placeholder ':id'.
    if (segments.length > 2 && !isNaN(segments[segments.length - 1])) {
        // Ej: de ['', 'edit-event', '123'] a '/edit-event/:id'
        return `/${segments.slice(1, -1).join('/')}/:id`;
    }
    
    // Si no es un ID, es una ruta estática como '/admin/dashboard' o '/my-events'.
    return route;
};

export default resolveRoutes;