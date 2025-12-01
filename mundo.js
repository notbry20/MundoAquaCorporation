// Variable global para almacenar los datos
let datosProyecto = null;

// Página de carga
window.addEventListener('load', function() {
    console.log('Página cargada - Iniciando pantalla de carga');
    const loadingScreen = document.getElementById('pantalla-carga');
    
    // Cargar datos JSON primero - CORREGIDO: ahora carga 'mundo.json'
    cargarDatosJSON().then(() => {
        inicializarPagina();
        
        if (loadingScreen) {
            setTimeout(() => {
                loadingScreen.style.opacity = '0';
                setTimeout(() => {
                    loadingScreen.style.display = 'none';
                    console.log('Pantalla de carga oculta');
                }, 1000);
            }, 2000);
        }
    }).catch(error => {
        console.error('Error cargando datos JSON:', error);
        datosProyecto = obtenerDatosRespaldo();
        inicializarPagina();
        
        if (loadingScreen) {
            loadingScreen.style.display = 'none';
        }
    });
});

async function cargarDatosJSON() {
    try {
        const response = await fetch('mundo.json');
        if (!response.ok) {
            throw new Error('Error al cargar el archivo JSON: ' + response.status);
        }
        datosProyecto = await response.json();
        console.log('Datos JSON cargados correctamente', datosProyecto);
        return datosProyecto;
    } catch (error) {
        console.error('Error cargando JSON:', error);
        throw error;
    }
}

// Datos de respaldo en caso de que el JSON falle
function obtenerDatosRespaldo() {
    return {
        "proyecto": {
            "titulo": "AquaCorporation",
            "slogan": "EL AGUA ES PODER",
            "subtitulo": "En un mundo sediento, solo los ricos pueden beber"
        },
        "historia": {
            "titulo": "AquaCorporation",
            "descripciones": [
                "Tras la privatización del agua por la Corporación AquaVida, el recurso vital se convierte en un lujo inalcanzable, sumiendo al mundo en una crisis de sed y enfermedad. Emilio, un joven de 18 años, observa como su comunidad se desmorona mientras los precios del agua se disparan. Aunque la desesperación y la enfermedad lo alcanzan, Emilio toma su celular para documentar la cruda verdad. Su último acto de resistencia es subir estas pruebas a la red, encendiendo la llama de una revolución nacida de la necesidad y la injusticia.",
                "En el centro de esta historia está Emilio, un chico de 18 años, testigo directo del inicio del colapso y quizá del nacimiento de la resistencia."
            ],
            "estadisticas": [
                {
                    "numero": "97%",
                    "etiqueta": "Agua controlada por corporaciones"
                },
                {
                    "numero": "2.3L",
                    "etiqueta": "Ración semanal por persona"
                },
                {
                    "numero": "4.5B",
                    "etiqueta": "Personas afectadas"
                }
            ]
        },
        "personajes": {
            "titulo": "Los Personajes",
            "subtitulo": "Conoce a los protagonistas de esta historia distópica",
            "lista": [
                {
                    "id": "emilio",
                    "nombre": "Emilio",
                    "rol": "El Revolucionario",
                    "video": "Nueva carpeta/VideoPersonajes_1.mp4",
                    "descripcion": "Un joven de 18 años que se convierte en el símbolo de la resistencia contra AquaCorporation. Tras presenciar cómo su comunidad sufre por la escasez de agua, decide documentar la verdad y exponer las injusticias del sistema.",
                    "estadisticas": [
                        {
                            "valor": "85%",
                            "etiqueta": "Determinación"
                        },
                        {
                            "valor": "70%",
                            "etiqueta": "Liderazgo"
                        },
                        {
                            "valor": "90%",
                            "etiqueta": "Coraje"
                        },
                        {
                            "valor": "65%",
                            "etiqueta": "Estrategia"
                        }
                    ]
                },
                {
                    "id": "leonardo",
                    "nombre": "Leonardo",
                    "rol": "El empresario",
                    "video": "Nueva carpeta/Malvado_OjoBrillante.mp4",
                    "descripcion": "Es un hombre de negocios frío, calculador y obsesionado con el control. Es ambicioso, cínico y completamente indiferente al sufrimiento de la población. Para él, el agua no es un derecho humano, sino un recurso monetizable, un producto que debe generar ganancias sin importar quién quede sediento.",
                    "estadisticas": [
                        {
                            "valor": "95%",
                            "etiqueta": "Inteligencia"
                        },
                        {
                            "valor": "97%",
                            "etiqueta": "Ambición"
                        },
                        {
                            "valor": "75%",
                            "etiqueta": "Antipático"
                        },
                        {
                            "valor": "60%",
                            "etiqueta": "Egocéntrico"
                        }
                    ]
                }
            ]
        },
        "creadores": {
            "titulo": "Los Creadores",
            "subtitulo": "El equipo detrás de esta historia",
            "lista": [
                {
                    "nombre": "Josselyn Morocho",
                    "rol": "Diseñadora Creativa",
                    "descripcion": "Especializada en desarrollar conceptos visuales innovadores, combinando estética y funcionalidad para crear piezas impactantes dentro de nuestro proyecto",
                    "foto": "Nueva carpeta/JossMorocho.png",
                    "enlace": "https://josswithdoubles.github.io/Josselyn-CV/"
                },
                {
                    "nombre": "Brayan Arboleda",
                    "rol": "Animador",
                    "descripcion": "Encargado del diseño de personajes y escenarios. Su trabajo define la estética única y atmosférica del mundo de AquaCorporation.",
                    "foto": "Nueva carpeta/BrayanArboleda.png",
                    "enlace": "https://notbry20.github.io/Cv_Portafolio_/"
                },
                {
                    "nombre": "Richard Martinez",
                    "rol": "Desarrollador Web",
                    "descripcion": "Responsable de la implementación técnica y experiencia de usuario. Asegura que la historia llega de manera inmersiva a la audiencia.",
                    "foto": "Nueva carpeta/RichardMartinez.png",
                    "enlace": "https://rmartinezj69-sys.github.io/PortafolioRichardMartinez"
                },
                {
                    "nombre": "Emily Rosero",
                    "rol": "Guionista",
                    "descripcion": "Especializada en crear historias que conectan. Desarrollo personajes, diálogos y narrativas para el proyecto, siempre buscando transmitir emociones y construir relatos que atrapen desde el inicio.",
                    "foto": "Nueva carpeta/Emily.png",
                    "enlace": "https://emirosero.github.io/PortafolioEmily2/"
                }
            ]
        }
    };
}

// Función para inicializar la página con los datos JSON
function inicializarPagina() {
    if (!datosProyecto) {
        console.error('No hay datos disponibles');
        return;
    }

    // Actualizar contenido dinámicamente
    actualizarContenido();
    
    // Inicializar funcionalidades existentes
    inicializarFuncionalidades();
    
    // Inicializar correcciones para móviles
    inicializarCorreccionesMoviles();
}

// Función para actualizar el contenido con datos JSON
function actualizarContenido() {
    // Actualizar sección de video
    const tituloVideo = document.querySelector('.titulo-video');
    const subtituloVideo = document.querySelector('.subtitulo-video');
    
    if (tituloVideo && datosProyecto.proyecto.slogan) {
        tituloVideo.textContent = datosProyecto.proyecto.slogan;
    }
    
    if (subtituloVideo && datosProyecto.proyecto.subtitulo) {
        subtituloVideo.textContent = datosProyecto.proyecto.subtitulo;
    }

    // Actualizar sección de historia
    actualizarSeccionHistoria();
    
    // Actualizar personajes
    actualizarPersonajes();
    
    // Actualizar creadores
    actualizarCreadores();
}

// Actualizar sección de historia
function actualizarSeccionHistoria() {
    const tituloHistoria = document.querySelector('.titulo-historia');
    const textosHistoria = document.querySelectorAll('.texto-historia');
    const estadisticasContainer = document.querySelector('.estadisticas-historia');
    
    if (tituloHistoria && datosProyecto.historia.titulo) {
        tituloHistoria.textContent = datosProyecto.historia.titulo;
    }
    
    // Actualizar textos de historia
    if (textosHistoria.length > 0 && datosProyecto.historia.descripciones) {
        textosHistoria.forEach((elemento, index) => {
            if (datosProyecto.historia.descripciones[index]) {
                elemento.textContent = datosProyecto.historia.descripciones[index];
            }
        });
    }
    
    // Actualizar estadísticas
    if (estadisticasContainer && datosProyecto.historia.estadisticas) {
        estadisticasContainer.innerHTML = '';
        
        datosProyecto.historia.estadisticas.forEach(estadistica => {
            const divEstadistica = document.createElement('div');
            divEstadistica.className = 'estadistica';
            
            divEstadistica.innerHTML = `
                <div class="numero-estadistica">${estadistica.numero}</div>
                <div class="etiqueta-estadistica">${estadistica.etiqueta}</div>
            `;
            
            estadisticasContainer.appendChild(divEstadistica);
        });
    }
}

// Actualizar personajes - CORREGIDO PARA MÓVILES
function actualizarPersonajes() {
    const cuadriculaPersonajes = document.querySelector('.cuadricula-personajes');
    const tituloPersonajes = document.querySelector('.seccion-personajes .titulo-seccion');
    const subtituloPersonajes = document.querySelector('.seccion-personajes .subtitulo-seccion');
    
    // Actualizar títulos
    if (tituloPersonajes && datosProyecto.personajes.titulo) {
        tituloPersonajes.textContent = datosProyecto.personajes.titulo;
    }
    
    if (subtituloPersonajes && datosProyecto.personajes.subtitulo) {
        subtituloPersonajes.textContent = datosProyecto.personajes.subtitulo;
    }
    
    // Actualizar cuadrícula de personajes
    if (cuadriculaPersonajes && datosProyecto.personajes.lista) {
        cuadriculaPersonajes.innerHTML = '';
        
        datosProyecto.personajes.lista.forEach(personaje => {
            const tarjetaPersonaje = document.createElement('div');
            tarjetaPersonaje.className = 'tarjeta-personaje';
            tarjetaPersonaje.setAttribute('data-personaje', personaje.id);
            
            tarjetaPersonaje.innerHTML = `
                <video class="video-personaje" 
                       autoplay 
                       muted 
                       loop 
                       playsinline 
                       webkit-playsinline 
                       preload="metadata"
                       disablePictureInPicture
                       controlslist="nodownload nofullscreen noremoteplayback">
                    <source src="${personaje.video}" type="video/mp4">
                </video>
                <div class="superposicion-personaje">
                    <h3 class="nombre-personaje">${personaje.nombre}</h3>
                    <p class="rol-personaje">${personaje.rol}</p>
                </div>
            `;
            
            cuadriculaPersonajes.appendChild(tarjetaPersonaje);
        });
        
        // Agregar event listeners para prevenir comportamiento por defecto
        setTimeout(() => {
            const videos = document.querySelectorAll('.video-personaje');
            videos.forEach(video => {
                // Prevenir que el video capture eventos táctiles
                video.addEventListener('touchstart', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                }, { passive: false });
                
                video.addEventListener('touchmove', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                }, { passive: false });
            });
        }, 100);
        
        // Crear modales dinámicamente
        crearModalesPersonajes();
    }
}

// Crear modales de personajes dinámicamente
function crearModalesPersonajes() {
    const body = document.body;
    
    datosProyecto.personajes.lista.forEach(personaje => {
        // Verificar si el modal ya existe
        if (!document.getElementById(`modal-${personaje.id}`)) {
            const modal = document.createElement('div');
            modal.className = 'modal-personaje';
            modal.id = `modal-${personaje.id}`;
            
            modal.innerHTML = `
                <div class="contenido-modal-personaje">
                    <button class="cerrar-modal-personaje">&times;</button>
                    <div class="cuerpo-modal-personaje">
                        <video class="video-modal-personaje" autoplay muted loop playsinline webkit-playsinline>
                            <source src="${personaje.video}" type="video/mp4">
                        </video>
                        <div class="info-modal-personaje">
                            <h2 class="nombre-modal-personaje">${personaje.nombre}</h2>
                            <p class="rol-modal-personaje">${personaje.rol}</p>
                            <p class="descripcion-modal-personaje">${personaje.descripcion}</p>
                            
                            <div class="estadisticas-personaje">
                                ${personaje.estadisticas.map(est => `
                                    <div class="item-estadistica">
                                        <div class="valor-estadistica">${est.valor}</div>
                                        <div class="etiqueta-estadistica">${est.etiqueta}</div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                </div>
            `;
            
            body.appendChild(modal);
        }
    });
}

// Actualizar creadores
function actualizarCreadores() {
    const cuadriculaCreadores = document.querySelector('.cuadricula-creadores');
    const tituloCreadores = document.querySelector('.seccion-creadores .titulo-seccion');
    const subtituloCreadores = document.querySelector('.seccion-creadores .subtitulo-seccion');
    
    // Actualizar títulos
    if (tituloCreadores && datosProyecto.creadores.titulo) {
        tituloCreadores.textContent = datosProyecto.creadores.titulo;
    }
    
    if (subtituloCreadores && datosProyecto.creadores.subtitulo) {
        subtituloCreadores.textContent = datosProyecto.creadores.subtitulo;
    }
    
    // Actualizar cuadrícula de creadores
    if (cuadriculaCreadores && datosProyecto.creadores.lista) {
        cuadriculaCreadores.innerHTML = '';
        
        datosProyecto.creadores.lista.forEach(creador => {
            const tarjetaCreador = document.createElement('div');
            tarjetaCreador.className = 'tarjeta-creador';
            
            tarjetaCreador.innerHTML = `
                <img src="${creador.foto}" alt="${creador.nombre}" class="foto_creador">
                <div class="info-creador">
                    <h3 class="nombre-creador">${creador.nombre}</h3>
                    <p class="rol-creador">${creador.rol}</p>
                    <p class="descripcion-creador">${creador.descripcion}</p>
                    <button class="boton-creador" onclick="window.location.href='${creador.enlace}'">Ver perfil</button>
                </div>
            `;
            
            cuadriculaCreadores.appendChild(tarjetaCreador);
        });
    }
}

// Inicializar todas las funcionalidades existentes
function inicializarFuncionalidades() {
    console.log('Iniciando funcionalidades');
    
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

    // Modales de personajes (ahora dinámicos)
    document.addEventListener('click', function(e) {
        const tarjeta = e.target.closest('.tarjeta-personaje');
        if (tarjeta) {
            const characterId = tarjeta.getAttribute('data-personaje');
            const modal = document.getElementById('modal-' + characterId);
            if (modal) {
                modal.classList.add('activo');
                document.body.style.overflow = 'hidden';
                console.log('Modal abierto: ' + characterId);
            }
        }
    });

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

    const buttons = document.querySelectorAll('.boton-principal, .boton-accion, .boton-creador');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

function esDispositivoMovil() {
    return (typeof window.orientation !== "undefined") || 
           (navigator.userAgent.indexOf('IEMobile') !== -1) ||
           /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function inicializarCorreccionesMoviles() {
    if (esDispositivoMovil()) {
        console.log('Dispositivo móvil detectado - aplicando correcciones');
        document.body.classList.add('dispositivo-movil');
        
        setTimeout(() => {
            const videosTarjetas = document.querySelectorAll('.video-personaje');
            videosTarjetas.forEach(video => {
                video.addEventListener('contextmenu', function(e) {
                    e.preventDefault();
                });
            });
        }, 500);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM cargado');
    if (datosProyecto) {
        inicializarFuncionalidades();
        inicializarCorreccionesMoviles();
    }
});

// Función para recargar datos - CORREGIDO
function recargarDatos() {
    cargarDatosJSON().then(() => {
        actualizarContenido();
        console.log('Datos recargados correctamente');
    }).catch(error => {
        console.error('Error recargando datos:', error);
    });
}
