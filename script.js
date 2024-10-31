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
    'Img_pro_instalacion/Diapositiva1.png?raw=true',
    'Img_pro_instalacion/Diapositiva2.png?raw=true',
    'Img_pro_instalacion/Diapositiva3.png?raw=true',
    'Img_pro_instalacion/Diapositiva4.png?raw=true',
    'Img_pro_instalacion/Diapositiva5.png?raw=true',
    'Img_pro_instalacion/Diapositiva6.png?raw=true',
    'Img_pro_instalacion/Diapositiva7.png?raw=true',
    'Img_pro_instalacion/Diapositiva8.png?raw=true',
    'Img_pro_instalacion/Diapositiva9.png?raw=true',
    'Img_pro_instalacion/Diapositiva10.png?raw=true',
    'Img_pro_instalacion/Diapositiva11.png?raw=true',
    'Img_pro_instalacion/Diapositiva12.png?raw=true',
    'Img_pro_instalacion/Diapositiva13.png?raw=true',
    'Img_pro_instalacion/Diapositiva14.png?raw=true',
    'Img_pro_instalacion/Diapositiva15.png?raw=true'
];

https://github.com/sebas0040/sebas0040.github.io/blob/main/Img_pro_instalacion/Diapositiva13.PNG?raw=true

// Lista de descripciones para cada imagen

const descriptions = [
    '<strong>Paso 1:</strong> Presiona el botón <b>"Nueva"</b> (ver icono en la imagen proporcionada).',
    '<strong>Paso 2:</strong> En <b>"Nombre"</b>, asigna un nombre a tu máquina virtual. En <b>"Tipo"</b>, selecciona <b>"Linux"</b>. En <b>"Versión"</b>, elige <b>"Ubuntu (64-bit)"</b>. Luego, presiona <b>"Next"</b>.',
    '<strong>Paso 3:</strong> Selecciona el tamaño de <b>RAM</b>. Se recomienda al menos 4 GB (4000 MB o más) para este sistema operativo. Después de elegir el tamaño, presiona <b>"Next"</b>.',
    '<strong>Paso 4:</strong> Selecciona <b>"Crear un disco duro virtual ahora"</b> y haz clic en <b>"Crear"</b>.',
    '<strong>Paso 5:</strong> Selecciona el tipo de archivo de disco <b>"VDI (VirtualBox Disk Image)"</b> y presiona <b>"Next"</b>.',
    '<strong>Paso 6:</strong> Elige la opción <b>"Reservado dinámicamente"</b> y haz clic en <b>"Next"</b>.',
    '<strong>Paso 7:</strong> Selecciona el tamaño del disco duro virtual. El mínimo recomendado es 10 GB, pero para una mejor experiencia, se sugiere 25 GB o más.',
    '<strong>Paso 8:</strong> Con la máquina virtual creada, haz clic en el icono de <b>"Configuración"</b>.',
    '<strong>Paso 9:</strong> Ve a <b>"Sistema"</b> y selecciona <b>"Procesador"</b>. Asigna el número de procesadores deseado y ajusta el <b>"Límite de Ejecución"</b> al 100%.',
    '<strong>Paso 10:</strong> Entra en <b>"Pantalla"</b> y luego en la subsección <b>"Pantalla"</b>. Asigna la <b>"Memoria de Video"</b> al máximo posible.',
    '<strong>Paso 11:</strong> Accede a <b>"Almacenamiento"</b> y, en <b>"Controlador: IDE"</b>, verifica que esté vacío. Haz clic en el icono del disco (ver icono en la imagen).',
    '<strong>Paso 12:</strong> Navega hasta la ubicación donde tienes descargada la imagen ISO del sistema operativo. Selecciona el archivo y presiona <b>"Abrir"</b>.',
    '<strong>Paso 13:</strong> Verifica que el sistema operativo aparezca en <b>"Controlador: IDE"</b> y haz clic en <b>"Aceptar"</b>.',
    '<strong>Paso 14:</strong> Selecciona tu máquina virtual y presiona el botón <b>"Iniciar"</b>.',
    '<strong>Paso 15:</strong> Si todo ha sido configurado correctamente, el sistema operativo debería iniciarse en tu máquina virtual, y verás su escritorio como fondo.'
];

// Inicializa el índice de la imagen actual
let currentImageIndex = 0;

// Selecciona el elemento de la imagen y el contenedor de descripción
const slideshowImage = document.getElementById('slideshow');
const descriptionText = document.getElementById('description');

// Función para actualizar la imagen y la descripción mostrada
function updateContent(index) {
    slideshowImage.src = images[index];
    descriptionText.innerHTML = descriptions[index];
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


// Función para formatear el texto de las descripciones con negrita en pasos, comillas y paréntesis
function formatDescription(text) {
    // Resalta "Paso X:"
    text = text.replace(/(Paso \d+:)/, '<strong>$1</strong>');
    
    // Resalta el texto entre comillas
    text = text.replace(/"([^"]+)"/g, '<b>"$1"</b>');
    
    // Resalta el texto entre paréntesis
    text = text.replace(/\(([^)]+)\)/g, '<b>($1)</b>');
    
    return text;
}

// Ejemplo de cómo aplicar el formato al mostrar cada descripción
// let currentIndex = 0;
function updateDescription(index) {
    descriptionText.innerHTML = formatDescription(descriptions[index]);
}

// Inicializa la primera descripción
// updateDescription(currentIndex);


//Programacion del boton menu
const b_menu = document.getElementById('b_menu');
const progresBarMenu = document.getElementById('progresBarMenu');

let ancho_max = '80%';
let ancho_min = '0px';


function mostrarOcultar_menu(){
    progresBarMenu.style.maxHeight = '35px'
    if (progresBarMenu.style.opacity === '1' | progresBarMenu.style.opacity === '' ){
      
        progresBarMenu.style.opacity = '0';
        progresBarMenu.style.width = ancho_min
        
    }else{
        progresBarMenu.style.opacity = '1';
        progresBarMenu.style.width = ancho_max
    };
}

// Agregar un evento para cuando la transición termine
progresBarMenu.addEventListener('transitionend', () => {
    progresBarMenu.style.maxHeight = '200px'
});

const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_ltv3k5j';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar comentario';
      alert('Gracias por tu comentario');
      this.reset(); // Limpia los campos del formulario
    }, (err) => {
      btn.value = 'Enviar comentario';
      alert(JSON.stringify(err));
    });
    
});
  