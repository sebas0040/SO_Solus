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


// Lista de las imágenes que vas a mostrar
const images = [
    'Img_pro_instalacion/Diapositiva1.png',
    'Img_pro_instalacion/Diapositiva2.png',
    'Img_pro_instalacion/Diapositiva3.png',
    'Img_pro_instalacion/Diapositiva4.png',
    'Img_pro_instalacion/Diapositiva5.png',
    'Img_pro_instalacion/Diapositiva6.png',
    'Img_pro_instalacion/Diapositiva7.png',
    'Img_pro_instalacion/Diapositiva8.png',
    'Img_pro_instalacion/Diapositiva9.png',
    'Img_pro_instalacion/Diapositiva10.png',
    'Img_pro_instalacion/Diapositiva11.png',
    'Img_pro_instalacion/Diapositiva12.png',
    'Img_pro_instalacion/Diapositiva13.png',
    'Img_pro_instalacion/Diapositiva14.png',
    'Img_pro_instalacion/Diapositiva15.png'
];

// Lista de descripciones para cada imagen
const descriptions = [
    'Descripción de la Diapositiva 1',
    'Descripción de la Diapositiva 2',
    'Descripción de la Diapositiva 3',
    'Descripción de la Diapositiva 4',
    'Descripción de la Diapositiva 5',
    'Descripción de la Diapositiva 6',
    'Descripción de la Diapositiva 7',
    'Descripción de la Diapositiva 8',
    'Descripción de la Diapositiva 9',
    'Descripción de la Diapositiva 10',
    'Descripción de la Diapositiva 11',
    'Descripción de la Diapositiva 12',
    'Descripción de la Diapositiva 13',
    'Descripción de la Diapositiva 14',
    'Descripción de la Diapositiva 15'
];

// Inicializa el índice de la imagen actual
let currentImageIndex = 0;

// Selecciona el elemento de la imagen y el contenedor de descripción
const slideshowImage = document.getElementById('slideshow');
const descriptionText = document.getElementById('description');

// Función para actualizar la imagen y la descripción mostrada
function updateContent(index) {
    slideshowImage.src = images[index];
    descriptionText.textContent = descriptions[index];
}

// Función para ir a la imagen anterior
document.getElementById('prevBtn').addEventListener('click', () => {
    if (currentImageIndex > 0) {
        currentImageIndex--;
    } else {
        currentImageIndex = images.length - 1; // Volver a la última imagen
    }
    updateContent(currentImageIndex);
});

// Función para ir a la siguiente imagen
document.getElementById('nextBtn').addEventListener('click', () => {
    if (currentImageIndex < images.length - 1) {
        currentImageIndex++;
    } else {
        currentImageIndex = 0; // Volver a la primera imagen
    }
    updateContent(currentImageIndex);
});
