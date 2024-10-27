// script.js
function mostrarSeccion(id) {
    // Ocultar todas las secciones
    const secciones = document.querySelectorAll('.seccion');
    secciones.forEach(seccion => {
        seccion.classList.remove('visible');
    });

    // Mostrar la sección seleccionada con animación
    const seccionSeleccionada = document.getElementById(id);
    seccionSeleccionada.classList.add('visible');
}
