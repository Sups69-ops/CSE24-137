document.addEventListener("DOMContentLoaded", function () {
    // ==== Mobile Menu Toggle ====
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenu && navMenu) {
        mobileMenu.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // ==== Newsletter Subscription ====
    const form = document.getElementById('newsletter-form');
    const emailInput = document.getElementById('email-input');
    const successMessage = document.getElementById('success-message');

    if (form && emailInput && successMessage) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            // Show success message
            successMessage.style.display = 'block';

            // Clear the email input
            emailInput.value = '';

            // Hide success message after 3 seconds
            setTimeout(() => {
                successMessage.style.display = 'none';
            }, 3000);
        });
    }
});
