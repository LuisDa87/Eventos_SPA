import { default as getData } from '../utils/getData';
import { saveSession } from '../utils/session';

const Login = {
    render: async () => {
        const view = `
            <div class="min-h-screen bg-gray-100 flex items-center justify-center">
                <div class="bg-white shadow-lg rounded-lg flex w-full max-w-4xl overflow-hidden">
                    <!-- Columna Izquierda con Imagen y Texto -->
                    <div class="hidden md:flex w-1/2 bg-cover bg-center p-12 text-white" style="background-image: url('https://peewah.co/wp-content/uploads/2022/10/Registro-para-Eventos.jpeg')">
                        <div class="flex flex-col justify-between">
                            <div>
                                <h2 class="text-4xl font-bold">Bienvenido</h2>
                                <p class="mt-4 text-lg">Los mejores eventos de la ciudad de medellín los encuentras en esta plataforma, desde eventos culturales y sociales hasta deportivos.</p>
                            </div>
                            <div class="flex space-x-4">
                                <a href="#" class="hover:opacity-75">EventosMed.com</a>

                            </div>
                        </div>
                    </div>
                    <!-- Columna Derecha con Formulario -->
                    <div class="w-full md:w-1/2 p-8 md:p-12">
                        <h2 class="text-3xl font-bold text-gray-800 mb-6">Iniciar Sesión</h2>
                        <form id="login-form">
                            <div class="mb-4">
                                <label for="login-email" class="block text-gray-700 text-sm font-bold mb-2">Email</label>
                                <input type="email" id="login-email" name="email" class="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Ingrese su correo electrónico" required>
                            </div>
                            <div class="mb-6">
                                <label for="login-password" class="block text-gray-700 text-sm font-bold mb-2">Contraseña</label>
                                <input type="password" id="login-password" name="password" class="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" placeholder="******************" required>
                            </div>
                            <div class="flex items-center justify-start mb-6">
                                <button type="submit" class="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-lg focus:outline-none focus:shadow-outline transition duration-300">
                                    Ingresar
                                </button>
                            </div>
                        </form>
                        <hr class="my-6">
                        <p class="text-center text-gray-600">
                            Aun no tienes cuenta? 
                            <a href="#/register" class="font-bold text-orange-500 hover:text-orange-700"> Registrarse</a>
                        </p>
                    </div>
                </div>
            </div>
        `;
        return view;
    },
    after_render: async () => {
        const loginForm = document.getElementById('login-form');
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = e.target.elements.email.value;
            const password = e.target.elements.password.value;
            
            const users = await getData(`/users?email=${email}&password=${password}`);

            if (users.length > 0) {
                saveSession(users[0]);
                window.location.hash = '/';
            } else {
                alert('Correo o contraseña incorrectos.');
            }
        });
    }
};

export default Login;
