document.addEventListener("DOMContentLoaded", function() {
    // Selecciona todos los enlaces de navegación
    const navLinks = document.querySelectorAll('nav a');

    // Agrega un evento de clic a cada enlace
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Remueve la clase 'active' de todos los enlaces
            navLinks.forEach(nav => nav.classList.remove('active'));
            // Agrega la clase 'active' al enlace clicado
            this.classList.add('active');
        });
    });

    // Maneja el envío del formulario
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Previene el envío del formulario

        // Muestra un mensaje de confirmación
        alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');

        // Limpia el formulario
        form.reset();
    });

    // Efecto de desplazamiento suave al hacer clic en los enlaces de navegación
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Previene el comportamiento predeterminado del enlace
            const targetId = this.getAttribute('href'); // Obtiene el ID del destino
            const targetElement = document.querySelector(targetId); // Selecciona el elemento destino

            // Desplazamiento suave
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
});