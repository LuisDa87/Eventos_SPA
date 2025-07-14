# Proyecto Científico - SPA de Rick and Morty

Una aplicación de página única creada con JavaScript vanilla, Webpack y la API de Rick and Morty.

quiero que funcione el travis 
parece que travis ahora si quiere funcionar 
prueba de datos 

errores actuales 
al cambiar de nombre de src/templates/Header.js creo que esta generando muchos errores ya que esta variable siempre estuvo en todos los demas archivos por lo cual creo que lo mas recomendable es no cambiar el nombre. 

los usuarios admin y register no pueden editar los eventos sale un error 
error cuando un usuario register quiere editar su evento 
Uncaught runtime errors:
×
ERROR
page.render is not a function
TypeError: page.render is not a function
    at eval (webpack://eventos_spa/./src/routes/index.js?:102:23)
    at Generator.eval (webpack://eventos_spa/./src/routes/index.js?:18:1660)
    at Generator.eval [as next] (webpack://eventos_spa/./src/routes/index.js?:19:362)
    at asyncGeneratorStep (webpack://eventos_spa/./src/routes/index.js?:20:70)
    at _next (webpack://eventos_spa/./src/routes/index.js?:21:163)

error que muestra al editar un evento en usuario admin 
Uncaught runtime errors:
×
ERROR
page.render is not a function
TypeError: page.render is not a function
    at eval (webpack://eventos_spa/./src/routes/index.js?:102:23)
    at Generator.eval (webpack://eventos_spa/./src/routes/index.js?:18:1660)
    at Generator.eval [as next] (webpack://eventos_spa/./src/routes/index.js?:19:362)
    at asyncGeneratorStep (webpack://eventos_spa/./src/routes/index.js?:20:70)
    at _next (webpack://eventos_spa/./src/routes/index.js?:21:163)

como vamos a poner la barra lateral el diseño que me generaste me parece muy bien, recuerda que este diseño debe estar en todas las pestañas menos en iniciar sesion y en registrarse en esa parte no abra barra lateral izquierda 

para usuarios que no se encuentrar registrados mostrar la barra lateral con los botones de inicio de sesion y registrarse y como solo es un visitante mostrar la informacion normal de los eventos como lo teniamos antes 

la barra lateral izquierda va a cambiar dependiendo el rol del usuario sin embargo es los mimsmos botones que teniamos anteriormente, lo unico que se le añade es simular la foto del usuario, ponerle el nombre y el rol que eso tambien ya lo teniamos antes osea que basicamente es lo mismo pero añadiendo la informacion  del usuario en la barra lateral, ademas los botones de iniciar sesion y registrase creo que no son necesarios cuando se ingresa como usuario admin o register estos botones solo son necesarios cuando, se inicia como visitante. 

ten encuenta actualizar los archivos que contienen rutas o partes del codigo que puedan afectar esta nueva barra lateral, actualizalos para no generar errores. 

Parece que estoy teniendo varios problemas con esta nueva actualizacion lo primero esque cuando inicio mi aplicacion inicia directamente en el user admin, me muestra la barra lateral, pero todo el otro contenido de los eventos las secciones no me lo muestra ademas en el panel lateral cuando presiono un boton me sale error por ejemplo 
usuario admin boton de dashboard siguiente error 
Uncaught runtime errors:
×
ERROR
lucide is not defined
ReferenceError: lucide is not defined
    at eval (webpack://eventos_spa/./src/templates/Header.js?:47:13)
    at Generator.eval (webpack://eventos_spa/./src/templates/Header.js?:6:1660)
    at Generator.eval [as next] (webpack://eventos_spa/./src/templates/Header.js?:7:362)
    at asyncGeneratorStep (webpack://eventos_spa/./src/templates/Header.js?:8:70)
    at _next (webpack://eventos_spa/./src/templates/Header.js?:9:163)
    at eval (webpack://eventos_spa/./src/templates/Header.js?:9:299)
    at new Promise (<anonymous>)
    at Object.eval (webpack://eventos_spa/./src/templates/Header.js?:9:90)
    at Object.after_render (webpack://eventos_spa/./src/templates/Header.js?:61:28)
    at eval (webpack://eventos_spa/./src/routes/index.js?:77:76)

usuario admin boton de administrar eventos siguiente error 

Uncaught runtime errors:
×
ERROR
lucide is not defined
ReferenceError: lucide is not defined
    at eval (webpack://eventos_spa/./src/templates/Header.js?:47:13)
    at Generator.eval (webpack://eventos_spa/./src/templates/Header.js?:6:1660)
    at Generator.eval [as next] (webpack://eventos_spa/./src/templates/Header.js?:7:362)
    at asyncGeneratorStep (webpack://eventos_spa/./src/templates/Header.js?:8:70)
    at _next (webpack://eventos_spa/./src/templates/Header.js?:9:163)
    at eval (webpack://eventos_spa/./src/templates/Header.js?:9:299)
    at new Promise (<anonymous>)
    at Object.eval (webpack://eventos_spa/./src/templates/Header.js?:9:90)
    at Object.after_render (webpack://eventos_spa/./src/templates/Header.js?:61:28)
    at eval (webpack://eventos_spa/./src/routes/index.js?:77:76)

usuario admin boton de crear evento siguiente error 

Uncaught runtime errors:
×
ERROR
lucide is not defined
ReferenceError: lucide is not defined
    at eval (webpack://eventos_spa/./src/templates/Header.js?:47:13)
    at Generator.eval (webpack://eventos_spa/./src/templates/Header.js?:6:1660)
    at Generator.eval [as next] (webpack://eventos_spa/./src/templates/Header.js?:7:362)
    at asyncGeneratorStep (webpack://eventos_spa/./src/templates/Header.js?:8:70)
    at _next (webpack://eventos_spa/./src/templates/Header.js?:9:163)
    at eval (webpack://eventos_spa/./src/templates/Header.js?:9:299)
    at new Promise (<anonymous>)
    at Object.eval (webpack://eventos_spa/./src/templates/Header.js?:9:90)
    at Object.after_render (webpack://eventos_spa/./src/templates/Header.js?:61:28)
    at eval (webpack://eventos_spa/./src/routes/index.js?:77:76)

usuario admin boton de salir siguiente error 

Uncaught runtime errors:
×
ERROR
lucide is not defined
ReferenceError: lucide is not defined
    at eval (webpack://eventos_spa/./src/templates/Header.js?:47:13)
    at Generator.eval (webpack://eventos_spa/./src/templates/Header.js?:6:1660)
    at Generator.eval [as next] (webpack://eventos_spa/./src/templates/Header.js?:7:362)
    at asyncGeneratorStep (webpack://eventos_spa/./src/templates/Header.js?:8:70)
    at _next (webpack://eventos_spa/./src/templates/Header.js?:9:163)
    at eval (webpack://eventos_spa/./src/templates/Header.js?:9:299)
    at new Promise (<anonymous>)
    at Object.eval (webpack://eventos_spa/./src/templates/Header.js?:9:90)
    at Object.after_render (webpack://eventos_spa/./src/templates/Header.js?:61:28)
    at eval (webpack://eventos_spa/./src/routes/index.js?:77:76)


