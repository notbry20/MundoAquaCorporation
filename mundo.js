// Página de carga
window.addEventListener('load', function() {
    console.log('Página cargada - Iniciando pantalla de carga');
    const loadingScreen = document.getElementById('pantalla-carga');
    if (loadingScreen) {
        setTimeout(() => {
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.style.display = 'none';
                console.log('Pantalla de carga oculta');
            }, 1000);
        }, 2000);
    }
});

// Cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM cargado - Iniciando funcionalidades');
    
    // Menú hamburguesa
    const hamburger = document.querySelector('.menu-hamburguesa');
    const navMenu = document.querySelector('.menu-navegacion');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('activo');
            navMenu.classList.toggle('activo');
            console.log('Menú hamburguesa clickeado');
        });
    }

    // Scroll suave para enlaces
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Modal de video
    const openVideoBtn = document.getElementById('abrir-modal-video');
    const videoModal = document.getElementById('modal-video');
    const closeVideoBtn = document.getElementById('cerrar-modal');
    
    if (openVideoBtn && videoModal) {
        openVideoBtn.addEventListener('click', function() {
            videoModal.classList.add('activo');
            document.body.style.overflow = 'hidden';
            console.log('Modal de video abierto');
        });
    }
    
    if (closeVideoBtn && videoModal) {
        closeVideoBtn.addEventListener('click', function() {
            videoModal.classList.remove('activo');
            document.body.style.overflow = 'auto';
            console.log('Modal de video cerrado');
        });
    }

    // Modal de PDF
    const openPdfBtn = document.getElementById('abrir-pdf-popup');
    const pdfModal = document.getElementById('modal-pdf');
    const closePdfBtn = document.querySelector('.cerrar-modal-pdf');
    
    if (openPdfBtn && pdfModal) {
        openPdfBtn.addEventListener('click', function() {
            pdfModal.classList.add('activo');
            document.body.style.overflow = 'hidden';
            console.log('Modal de PDF abierto');
        });
    }
    
    if (closePdfBtn && pdfModal) {
        closePdfBtn.addEventListener('click', function() {
            pdfModal.classList.remove('activo');
            document.body.style.overflow = 'auto';
            console.log('Modal de PDF cerrado');
        });
    }

    // Cerrar modales al hacer clic fuera
    const allModals = document.querySelectorAll('.modal-video, .modal-pdf, .modal-personaje');
    
    allModals.forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.remove('activo');
                document.body.style.overflow = 'auto';
            }
        });
    });

    // Audio
    const audioBtn = document.getElementById('reproducir-audio');
    const audioPlayer = document.getElementById('reproductor-audio');
    
    if (audioBtn && audioPlayer) {
        audioBtn.addEventListener('click', function() {
            if (audioPlayer.paused) {
                audioPlayer.play();
                this.style.backgroundColor = 'var(--color-destacado)';
            } else {
                audioPlayer.pause();
                this.style.backgroundColor = 'var(--color-accento)';
            }
        });
    }

    // Modales de personajes
    const characterCards = document.querySelectorAll('.tarjeta-personaje');
    
    characterCards.forEach(card => {
        card.addEventListener('click', function() {
            const characterId = this.getAttribute('data-personaje');
            const modal = document.getElementById('modal-' + characterId);
            if (modal) {
                modal.classList.add('activo');
                document.body.style.overflow = 'hidden';
                console.log('Modal abierto: ' + characterId);
            }
        });
    });

    // Cerrar modales de personajes
    const closeCharacterBtns = document.querySelectorAll('.cerrar-modal-personaje');
    
    closeCharacterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const modal = this.closest('.modal-personaje');
            if (modal) {
                modal.classList.remove('activo');
                document.body.style.overflow = 'auto';
            }
        });
    });

    // Cerrar con Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            allModals.forEach(modal => {
                if (modal.classList.contains('activo')) {
                    modal.classList.remove('activo');
                    document.body.style.overflow = 'auto';
                }
            });
        }
    });
});

// Efectos de hover para botones
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.boton-principal, .boton-accion, .boton-creador');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

