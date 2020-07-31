document.addEventListener('DOMContentLoaded', function () {
    // When the event DOMContentLoaded occurs, it is safe to access the DOM

    // When the user scrolls the page, execute myFunction 
    window.addEventListener('scroll', stickyNavBar);



    // When the user scrolls the page, execute myFunction
    window.onscroll = function () {
        stickyNavBar()
    };

    // Get the navbar
    var navbar = document.getElementById("navbarjs");

    // Get the offset position of the navbar
    var sticky = navbar.offsetTop;

    // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function stickyNavBar() {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky")
        } else {
            navbar.classList.remove("sticky");
        }
    }

});