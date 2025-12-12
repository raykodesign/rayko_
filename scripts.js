document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById("imageModal");
    const btn = document.querySelector(".btn-action.secondary"); // El botón "Ver más fotos"
    const closeBtn = document.querySelector(".close-btn");
    const carouselInner = document.getElementById("carouselInner");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");

    let slideIndex = 1;

    // --- 1. Datos de la Galería (¡AQUÍ MODIFICAS TUS IMÁGENES/GIFS!) ---
    const galleryItems = [
        { src: 'https://i.ibb.co/whdzYdDc/aracely-1.gif',},
        { src: 'https://i.ibb.co/kgGsfnWD/pcback-viviana.gif'},
        { src: 'https://i.ibb.co/GQ6GmDCc/fonodochimi.gif'},
        { src: 'https://iili.io/f5mXkRj.gif'},
        { src: 'https://iili.io/f5pPDdJ.gif',},
        { src: 'https://iili.io/f5bZgtV.gif',}
        // Añade tantos objetos como necesites (¡incluyendo GIFs!)
    ];

    // --- 2. Cargar Contenido en el Carrusel ---
    function loadCarouselItems() {
        carouselInner.innerHTML = ''; // Limpiar contenido existente
        galleryItems.forEach((item, index) => {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('carousel-item');
            if (index === 0) {
                itemDiv.classList.add('active');
            }

            const img = document.createElement('img');
            img.src = item.src;
            img.alt = `Foto Ampliada ${index + 1}`;
            
            const caption = document.createElement('p');
            caption.classList.add('caption');
            caption.textContent = item.caption;

            itemDiv.appendChild(img);
            itemDiv.appendChild(caption);
            carouselInner.appendChild(itemDiv);
        });
        showSlides(slideIndex); // Asegura que se muestre el primer slide
    }


    // --- 3. Funciones del Carrusel ---

    function showSlides(n) {
        const slides = document.getElementsByClassName("carousel-item");
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
            slides[i].classList.remove('active');
        }

        if (slides[slideIndex - 1]) {
            slides[slideIndex - 1].style.display = "block";
            slides[slideIndex - 1].classList.add('active');
        }
    }

    // Navegación (siguiente/anterior)
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    // --- 4. Eventos del Modal ---

    // Abrir Modal
    btn.onclick = function(e) {
        e.preventDefault(); // Evita que el enlace salte
        loadCarouselItems(); // Carga las imágenes (importante si las modificas)
        modal.style.display = "block";
        slideIndex = 1; // Reinicia el carrusel al abrir
        showSlides(slideIndex);
    }

    // Cerrar Modal con el botón X
    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    // Cerrar Modal haciendo clic fuera de él
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Eventos de navegación (Prev/Next)
    prevBtn.onclick = function() {
        plusSlides(-1);
    }

    nextBtn.onclick = function() {
        plusSlides(1);
    }

    // Cargar contenido al inicio
    loadCarouselItems(); 
});

document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById("imageModal");
    const btn = document.querySelector(".btn-action.tercery"); // El botón "Ver más fotos"
    const closeBtn = document.querySelector(".close-btn");
    const carouselInner = document.getElementById("carouselInner");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");

    let slideIndex = 1;

    // --- 1. Datos de la Galería (¡AQUÍ MODIFICAS TUS IMÁGENES/GIFS!) ---
    const galleryItems = [
        { src: 'https://i.ibb.co/N2Zy9vX8/gifrayko.gif',},
        { src: 'https://iili.io/f5pUXdQ.gif'},
        { src: 'https://iili.io/f5pSuHB.gif',},
        { src: 'https://iili.io/f5pSSJ2.gif',},
        { src: 'https://iili.io/f5p4CmB.gif',},
        { src: 'https://iili.io/f5p6k9R.gif',},
        // Añade tantos objetos como necesites (¡incluyendo GIFs!)
    ];

    // --- 2. Cargar Contenido en el Carrusel ---
    function loadCarouselItems() {
        carouselInner.innerHTML = ''; // Limpiar contenido existente
        galleryItems.forEach((item, index) => {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('carousel-item');
            if (index === 0) {
                itemDiv.classList.add('active');
            }

            const img = document.createElement('img');
            img.src = item.src;
            img.alt = `Foto Ampliada ${index + 1}`;
            
            const caption = document.createElement('p');
            caption.classList.add('caption');
            caption.textContent = item.caption;

            itemDiv.appendChild(img);
            itemDiv.appendChild(caption);
            carouselInner.appendChild(itemDiv);
        });
        showSlides(slideIndex); // Asegura que se muestre el primer slide
    }


    // --- 3. Funciones del Carrusel ---

    function showSlides(n) {
        const slides = document.getElementsByClassName("carousel-item");
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
            slides[i].classList.remove('active');
        }

        if (slides[slideIndex - 1]) {
            slides[slideIndex - 1].style.display = "block";
            slides[slideIndex - 1].classList.add('active');
        }
    }

    // Navegación (siguiente/anterior)
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    // --- 4. Eventos del Modal ---

    // Abrir Modal
    btn.onclick = function(e) {
        e.preventDefault(); // Evita que el enlace salte
        loadCarouselItems(); // Carga las imágenes (importante si las modificas)
        modal.style.display = "block";
        slideIndex = 1; // Reinicia el carrusel al abrir
        showSlides(slideIndex);
    }

    // Cerrar Modal con el botón X
    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    // Cerrar Modal haciendo clic fuera de él
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Eventos de navegación (Prev/Next)
    prevBtn.onclick = function() {
        plusSlides(-1);
    }

    nextBtn.onclick = function() {
        plusSlides(1);
    }

    // Cargar contenido al inicio
    loadCarouselItems(); 
});

// --- FUNCION DE EFECTO DE ESCRITURA ---
function startTypingEffect(elementId, text) {
    const element = document.getElementById(elementId);
    let i = 0;
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            // Velocidad de escritura: 150 milisegundos
            setTimeout(type, 150); 
        } else {
            // Cuando termina, puedes detener el parpadeo si quieres
            // o dejarlo para indicar que el nombre está completo.
            // Para detener el parpadeo:
            // element.style.animation = 'none'; 
        }
    }

    // Retraso inicial antes de empezar a escribir (1 segundo)
    setTimeout(type, 1000); 
}

// Llama a la función de escritura cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    // 1. Iniciar el efecto de escritura para el título
    startTypingEffect('typing-text', 'Rayko'); 

    // 2. Todo el código existente de la galería y el modal...
    // ... [Tu código existente de la galería y el modal sigue aquí] ...
    
    // El resto de tu código de scripts.js
    const modal = document.getElementById("imageModal");
    const btn = document.querySelector(".btn-action.secondary"); 
    // ... y la segunda función para el botón .tercery
    const btnTercery = document.querySelector(".btn-action.tercery"); 
    // ...
});

document.addEventListener('DOMContentLoaded', function() {
    
    // ... [Todas las variables y funciones existentes (modal, btn, loadCarouselItems, etc.)] ...
    
    // --- NUEVO: Elementos del Modal de Radio ---
    const radioModal = document.getElementById("radioModal");
    const openRadioBtn = document.getElementById("openRadioModalBtn");
    const closeRadioBtn = document.querySelector(".radio-close-btn"); // El botón X del modal de radio

    // 5. Eventos del Modal de Radio

    // 1. Abrir Modal de Radio
    if (openRadioBtn) {
        openRadioBtn.onclick = function(e) {
            e.preventDefault();
            radioModal.style.display = "block";
        }
    }

    // 2. Cerrar Modal de Radio con el botón X
    if (closeRadioBtn) {
        closeRadioBtn.onclick = function() {
            radioModal.style.display = "none";
        }
    }

    // ... [Tus eventos existentes para el modal de fotos, como btn.onclick y closeBtn.onclick] ...


    // 3. Cierre Global: ¡REEMPLAZA el antiguo window.onclick!
    const imageModal = document.getElementById("imageModal"); // Asumiendo que es tu modal de fotos original
    window.onclick = function(event) {
        if (event.target == imageModal) {
            imageModal.style.display = "none";
        }
        if (event.target == radioModal) {
            radioModal.style.display = "none";
        }
    }

});
