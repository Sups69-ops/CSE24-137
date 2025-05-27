// script.js

document.addEventListener("DOMContentLoaded", function () {
    // Mobile menu toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');

    mobileMenu.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Newsletter subscription form
    const form = document.getElementById('newsletter-form');
    const emailInput = document.getElementById('email-input');
    const successMessage = document.getElementById('success-message');

    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            successMessage.style.display = 'block';
            emailInput.value = '';
            setTimeout(() => {
                successMessage.style.display = 'none';
            }, 3000);
        });
    }
});
