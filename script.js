// Este script hace que los botones de navegación se deslicen suavemente
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

// Este script anima las listas y las imágenes parallax al hacer scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        }
    });
}, { threshold: 0.5 }); // Se activa cuando el 50% del elemento es visible

document.querySelectorAll('.fade-in-item').forEach(item => {
    observer.observe(item);
});

// Efecto Parallax para las imágenes
window.addEventListener('scroll', () => {
    const parallaxImages = document.querySelectorAll('.parallax-img');
    const scrollPosition = window.scrollY;

    parallaxImages.forEach(img => {
        // Mueve la imagen un poco más lento que el scroll para crear profundidad
        const speed = 0.2;
        const yPos = - (scrollPosition * speed);
        img.style.transform = `translateY(${yPos}px)`;
    });
});
