document.addEventListener('DOMContentLoaded', () => {
    // Funcionalidad del menú hamburguesa
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Cierra el menú al hacer clic en un enlace
    document.querySelectorAll('.nav-button').forEach(button => {
        button.addEventListener('click', () => {
            if (window.innerWidth <= 767) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });

    // Desplazamiento suave a las secciones
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 60, // Ajusta para el header fijo
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animación de aparición gradual (fade-in) al hacer scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
    });

    document.querySelectorAll('.fade-in').forEach(element => {
        observer.observe(element);
    });
});