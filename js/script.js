// typing animation
var typed = new Typed(".typing", {
    strings:[" ", "Web Designer", "Junior Web Developer" ],
    typeSpeed:100,
    BackSpeed:60,
    loop:true,
});

// Function to handle active state
const navLinks = document.querySelectorAll('.nav a');

navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(item => item.classList.remove('active'));
        this.classList.add('active');
    });
});

jQuery(document).ready(function(){
    $('.nav-toggler').click(function(){
        $('.aside').toggleClass('active');
    });
});

// function toggleNav() {
//     const nav = document.querySelector('.aside .nav-toggler');
//     nav.classList.toggle('hidden');
// }
function toggleNav() {
    const nav = document.querySelector('.nav-toggler');
    if (window.innerWidth <= 768) { // Adjust this breakpoint as needed
        nav.classList.remove('hidden');
    } else {
        nav.classList.add('hidden');
    }
}

// Add event listener to handle window resize
window.addEventListener('resize', toggleNav);

// Initial call to set the correct state on page load
toggleNav();