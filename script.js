// Función para mostrar la sección correspondiente
function mostrarSeccion(seccionId) {
    // Oculta todas las secciones
    const secciones = document.querySelectorAll('.seccion');
    secciones.forEach(seccion => {
        seccion.classList.remove('visible'); // Elimina la clase visible
    });
    // Muestra la sección correspondiente
    document.getElementById(seccionId).classList.add('visible'); // Añade la clase visible
}
