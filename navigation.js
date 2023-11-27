document.addEventListener("DOMContentLoaded", function () {
    // Function to toggle responsive navigation
    function toggleResponsiveNav() {
        var nav = document.querySelector("nav");
        nav.classList.toggle("responsive");
    }

    // Attach the toggleResponsiveNav function to the navigation icon's click event
    var navIcon = document.querySelector(".nav-icon");
    navIcon.addEventListener("click", toggleResponsiveNav);
});
