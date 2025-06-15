document.addEventListener('DOMContentLoaded', function() {
    // Get the current URL path
    const currentPath = window.location.pathname;

    // Get all navigation links
    const navbarMenu=document.querySelector('.navbar-menu');
    const navbarToggle= document.querySelector('.navbar-toggle');
    const navLinks = document.querySelectorAll('.navbar a');

    navbarToggle.addEventListener('click', function() {
        navbarMenu.classList.toggle('active');
    })

    // closing the mnenu click is outside
    document.addEventListener('click', function(event) {
        const isClickInsideMenu = navbarMenu.contains(event.target);
        const isClickInsideToggle = navbarToggle.contains(event.target);

        if (!isClickInsideMenu && !isClickInsideToggle && navbarMenu.classList.contains('active')) {
            navbarMenu.classList.remove('active');
        } 
    });

    // close the menu when window is resized
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && navbarMenu.classList.contains('active')) {
            navbarMenu.classList.remove('active');
        }
    });
})
