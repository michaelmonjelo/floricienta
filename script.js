// Variable para rastrear la página actual
let currentPage = 0; // 0 = Cover, 1-50 = Razones, 51 = Final

// Función para mostrar la página deseada y ocultar las demás
function goToPage(pageNumber) {
    // 1. Oculta la página actual
    const currentPageElement = document.getElementById(`page-${currentPage}`);
    if (currentPageElement) {
        currentPageElement.classList.add('hidden');
    }
    
    // 2. Actualiza el contador de la página
    currentPage = pageNumber;
    
    // 3. Muestra la nueva página
    const nextPageElement = document.getElementById(`page-${currentPage}`);
    if (nextPageElement) {
        nextPageElement.classList.remove('hidden');
    }
}

// **Función para generar las 50 páginas automáticamente**
// Esto te ahorra copiar y pegar 50 veces el HTML.
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.book-container');
    
    // Crear las 50 páginas de razones (1 a 50)
    for (let i = 1; i <= 26; i++) {
        const page = document.createElement('div');
        page.className = 'page reason-page hidden';
        page.id = `page-${i}`;
        
        // Contenido de la página (¡DEBES EDITAR ESTE TEXTO!)
       let reasonText = ""; // Variable que contendrá la razón específica para cada página

        if (i === 1) {
            reasonText = "tu pelo.";
        } else if (i === 2) {
            reasonText = "tu sonrisa.";
        } else if (i === 3) {
            reasonText = "tu ojos que aveces me dan miedo";
         }else if (i === 4) { 
            reasonText = "tu nariz.";
         } else if (i === 5) {
            reasonText = "la forma de tu cara.";
         } else if (i === 6) {
            reasonText = "en si toda tu cara es preciosa.";
         }else if (i === 7) {
            reasonText = "mas cuando te miro espero que un dia esos ojitos lindos me miren a mi.";
         }else if (i === 8) {
            reasonText = "desde que te vi nunca mas quise ver a otra mujer que no seas vos.";
         }else if (i === 9) {
            reasonText = "tu estatura.";
         } else if (i === 10) {
            reasonText = "tu forma de caminar.";
         }else if (i === 11) {
            reasonText = "tu perfume.";
         }else if (i === 12) {
            reasonText = "tus uñas siempre lindas y cuidadas.";
         }else if (i === 13) {
            reasonText = "tus manos que aunque no tuve el privilegio de tocarlas las veo delicadas y hermosas como vos.";
         }else if (i === 14) {
            reasonText = "en si la delicadeza y belleza forman parte de vos.";
         }else if (i === 15) {
            reasonText = "tu voz que aunque sea muy tierna aveces salen esas palabras que te dan ganas de meterte abajo de la tierra.";
         }else if (i === 16) {
            reasonText = "y tu forma de reir que pocas veces la escuche, fue lo mas lindo que escucharon mis oidos.";
         }else if (i === 17) {
            reasonText = "tus lunares, que tenemos casi los mismos en el cachete derecho, son preciosos.";
         }else if (i === 18) {
            reasonText = "tu humor sarcastico que al principio me costo entender pero una vez que lo hice me comenzaste a atraer cada vez mas.";
         }else if (i === 19) {
            reasonText = "tu inteligencia, que aunque se que te cuestan algunas cosas jajajaja.";
         }else if (i === 20) {
            reasonText = "me encanta que seas tan trabajadora y independiente.";
         }else if (i === 21) {
            reasonText = "vendiendo ropa o haciendo uñas.";
         }else if (i === 22) {
            reasonText = "que estes siendo la cabecilla de tu casa entre tus hermanos y aunque llegues cansada siempre le cocinas algo a ellos.";
         }else if (i === 23) {
            reasonText = "que seas familiera es una de las tantas cosas que me gustan de vos.";
         }else if (i === 24) {
            reasonText = "por como sos con tus hermanitos, con tu mama y demas.";
         }else if (i === 25) {
            reasonText = "que seas chica de casa y que no andes en la joda como todas las demas chicas de tu edad";
         } else if (i === 26) {
            reasonText = "que luches por tu futuro y que tengas metas me hacen ver mucho la clase de mujer que sos y es una asi con la que yo quiero estar.";
         }



         page.innerHTML = `
            <div class="page-content">
                <h2>Razón ${i}</h2>
                <p style="font-size: 1.1em; padding: 0 20px;">${reasonText}</p> 
            </div>
            <button class="nav-button prev" onclick="goToPage(${i - 1})">Anterior</button>
            <button class="nav-button next" onclick="goToPage(${i + 1})">Siguiente</button>
        `;
        // Insertar la nueva página antes de la página final
        const finalPage = document.getElementById('page-27');
        container.insertBefore(page, finalPage);
    }
    
    // Iniciar en la portada (página 0)
    goToPage(0);
});