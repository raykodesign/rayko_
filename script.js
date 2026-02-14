document.addEventListener('DOMContentLoaded', () => {

    /* ===========================
       RADIO STREAMING
    =========================== */
    const audio = document.getElementById("audioPlayer");
    const playBtn = document.querySelector(".play-main");
    const nowPlaying = document.querySelector(".now-playing");
    const volumeSlider = document.querySelector(".vol-slider");

    if (audio) {
        audio.src = "https://mediastreamm.com/8238/stream";
        audio.volume = 0.5;

        const attemptPlay = () => {
            audio.play().then(() => {
                playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
                nowPlaying.textContent = "Radio Xat Las Vegas 320 kbps";
            }).catch(error => {
                console.log("Autoplay bloqueado, esperando interacción del usuario.");
            });
        };
        attemptPlay();
    }

    if (playBtn && audio) {
        playBtn.addEventListener("click", () => {
            if (audio.paused) {
                audio.play();
                playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
                nowPlaying.textContent = "LasVegas Xat - 320kbps ";
            } else {
                audio.pause();
                playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
                nowPlaying.textContent = "RAYKO FM - PAUSA";
            }
        });
    }

    if (volumeSlider && audio) {
        volumeSlider.addEventListener("input", () => {
            audio.volume = volumeSlider.value / 100;
        });
    }

    /* ===========================
       NAVEGACIÓN (TABS) CON SCROLL AUTOMÁTICO
    =========================== */
    const viewTriggers = document.querySelectorAll('.view-trigger');
    const views = document.querySelectorAll('.view');

    window.triggerMenu = function(targetId) {
        viewTriggers.forEach(btn => {
            btn.classList.remove('active');
            if(btn.dataset.target === targetId) {
                btn.classList.add('active');
            }
        });

        views.forEach(view => view.classList.remove('active'));
        const targetView = document.getElementById(targetId);
        
        if(targetView) {
            targetView.classList.add('active');
            
            // Lógica de scroll
            if (window.innerWidth <= 768) {
                setTimeout(() => {
                   const contentTop = document.querySelector('.content-area').offsetTop;
                   window.scrollTo({ top: contentTop - 20, behavior: 'smooth' });
                }, 100);
            } else {
                 window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }
    };

    viewTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const target = trigger.dataset.target;
            window.triggerMenu(target);
        });
    });

    /* ===========================
       VANILLA TILT
    =========================== */
    if (typeof VanillaTilt !== 'undefined') {
        VanillaTilt.init(document.querySelectorAll(".tilt-card"), {
            max: 5, speed: 400, glare: true, "max-glare": 0.2, scale: 1.02
        });
    }

    /* ===========================
       REPRODUCTOR ARRASTRABLE (DRAGGABLE)
    =========================== */
    // Solo activar en pantallas grandes (PC)
    if (window.innerWidth > 768) {
        dragElement(document.getElementById("floatingPlayer"));
    }
});

/* ===========================
   FUNCIONES GLOBALES
=========================== */
window.filterPcback = function(category, element) {
    const pcGrid = document.getElementById('pcback-grid');
    const menuBtns = document.querySelectorAll('.pcback-menubar-container .menu-btn');
    const galleryTiles = document.querySelectorAll('.gallery-tile');

    if(menuBtns) menuBtns.forEach(btn => btn.classList.remove('active'));
    if (element) element.classList.add('active');

    if (pcGrid) {
        pcGrid.style.opacity = '0';
        setTimeout(() => {
            galleryTiles.forEach(item => {
                if (category === 'all' || item.classList.contains(category)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
            pcGrid.style.opacity = '1';
        }, 200);
    }
};

// REEMPLAZA TU FUNCIÓN openModal ACTUAL POR ESTA:

window.openModal = function(src, caption) {
    const modal = document.getElementById('imageModal');
    
    // Elementos posibles
    const modalImg = document.getElementById('modalImg');
    const modalVideo = document.getElementById('modalVideo'); // El nuevo video
    const dualContainer = document.getElementById('modalDualContainer');
    const captionText = document.getElementById('caption');
    
    if(modal) {
        modal.style.display = "flex";
        
        // 1. Ocultar el modo "Fondo Doble" por si acaso estaba abierto
        if(dualContainer) dualContainer.classList.add('hidden');
        
        // 2. ¿Es un VIDEO? (Detectamos si termina en .mp4)
        if (src.toLowerCase().endsWith('.mp4')) {
            // Ocultamos la imagen
            if(modalImg) modalImg.style.display = "none";
            
            // Mostramos y reproducimos el video
            if(modalVideo) {
                modalVideo.style.display = "block";
                modalVideo.src = src;
                modalVideo.play(); 
            }
        } 
        // 3. Entonces es una IMAGEN
        else {
            // Ocultamos y pausamos el video
            if(modalVideo) {
                modalVideo.style.display = "none";
                modalVideo.pause();
                modalVideo.src = "";
            }
            
            // Mostramos la imagen
            if(modalImg) {
                modalImg.style.display = "block";
                modalImg.src = src;
            }
        }

        // Poner el texto
        if(captionText) captionText.innerHTML = caption || '';
    }
};

// TAMBIÉN ACTUALIZA closeModal PARA QUE EL VIDEO SE CALLE AL CERRAR
window.closeModal = function() {
    const modal = document.getElementById('imageModal');
    if(modal) {
        modal.style.display = "none";
        
        const modalVideo = document.getElementById('modalVideo');
        const modalImg = document.getElementById('modalImg');
        
        if(modalImg) modalImg.src = ""; // Limpiar imagen
        
        if(modalVideo) {
            modalVideo.pause(); // ¡Importante! Parar el sonido
            modalVideo.src = ""; // Quitar el video
        }
    }
};


window.onclick = function(event) {
    const modal = document.getElementById('imageModal');
    if (event.target == modal) {
        window.closeModal();
    }
};

/* ===========================
   FUNCIÓN PARA ARRASTRAR ELEMENTOS
=========================== */
function dragElement(elmnt) {
    if (!elmnt) return;
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    const handle = document.getElementById(elmnt.id + "DragHandle");

    if (handle) {
        handle.onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        elmnt.style.bottom = 'auto'; 
        elmnt.style.right = 'auto'; 
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }

}

