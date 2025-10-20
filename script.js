document.addEventListener('DOMContentLoaded', function() {
    // Get references to the button and the list of links
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    // Add an event listener to the button
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            // Toggle the 'active' class, which is styled by the CSS media query
            navLinks.classList.toggle('active');
        });
    }
});
