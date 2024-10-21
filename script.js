function mostrarSeccion(seccionId) {
    // Ocultar todas las secciones
    const secciones = document.querySelectorAll('.seccion');
    secciones.forEach(seccion => seccion.style.display = 'none');

    // Mostrar la sección seleccionada
    const seccionAMostrar = document.getElementById(seccionId);
    seccionAMostrar.style.display = 'block';
}
