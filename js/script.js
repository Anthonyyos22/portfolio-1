// ===== MOBILE NAVIGATION TOGGLE =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// ===== STICKY NAVBAR ON SCROLL =====
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ===== UPDATE COPYRIGHT YEAR =====
document.getElementById('currentYear').textContent = new Date().getFullYear();

// ===== PARTICLES.JS BACKGROUND =====
if (document.getElementById('particles-js')) {
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#0077b6"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                }
            },
            "opacity": {
                "value": 0.5,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 2,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#0077b6",
                "opacity": 0.2,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 1,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": true,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 0.5
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });
}

// ===== VANILLA TILT EFFECT =====
if (document.querySelector('[data-tilt]')) {
    VanillaTilt.init(document.querySelectorAll('[data-tilt]'), {
        max: 5,
        speed: 400,
        glare: true,
        "max-glare": 0.2,
        scale: 1.02
    });
}

// ===== COPY TO CLIPBOARD =====
if (document.querySelector('.copy-btn')) {
    const clipboard = new ClipboardJS('.copy-btn');
    
    clipboard.on('success', function(e) {
        const originalText = e.trigger.innerHTML;
        e.trigger.innerHTML = '<i class="fas fa-check"></i> Copied!';
        e.trigger.style.background = '#28a745';
        e.trigger.style.color = 'white';
        
        setTimeout(() => {
            e.trigger.innerHTML = originalText;
                        e.trigger.style.background = ''; // Reset background style
                        e.trigger.style.color = ''; // Reset color style
                    }, 2000); // Reset after 2 seconds
                });
            }