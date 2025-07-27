// Este script hace que los botones de navegación se deslicen suavemente
// en lugar de saltar a la sección. ¡Es un toque profesional!

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
