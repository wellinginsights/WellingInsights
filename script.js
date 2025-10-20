// --- Back to Top Button Logic ---

// Get the button
const backToTopButton = document.getElementById("back-to-top");

// When the user scrolls down 200px from the top, show the button
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (backToTopButton) { // Check if the button exists on this page
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    // Uses the smooth scrolling applied in CSS
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

document.addEventListener('DOMContentLoaded', function() {
    // --- Mobile Menu Logic ---
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }
});
