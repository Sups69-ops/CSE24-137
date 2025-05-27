document.addEventListener("DOMContentLoaded", function () {
    // ==== Mobile Menu Toggle ====
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenu && navMenu) {
        mobileMenu.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // ==== Dropdown Menu Toggle ====
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function (e) {
            const parent = this.parentElement;

            // Close all other dropdowns
            document.querySelectorAll('.nav-dropdown').forEach(drop => {
                if (drop !== parent) drop.classList.remove('open');
            });

            // Toggle current dropdown
            parent.classList.toggle('open');
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', function (e) {
        if (!e.target.closest('.nav-dropdown')) {
            document.querySelectorAll('.nav-dropdown').forEach(drop => {
                drop.classList.remove('open');
            });
        }
    });

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
