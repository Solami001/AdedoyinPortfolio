// script.js
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const carousels = document.querySelectorAll('.carousel');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            const target = link.getAttribute('data-target');

            carousels.forEach(carousel => {
                if (carousel.id === target) {
                    carousel.classList.add('active');
                } else {
                    carousel.classList.remove('active');
                }
            });
        });
    });
});

