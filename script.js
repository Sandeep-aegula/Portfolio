window.addEventListener('scroll', () => {
    const scrollToTopButton = document.getElementById('scrollToTop');
    if (window.scrollY > window.innerHeight / 2) {
        scrollToTopButton.classList.remove('hidden');
    } else {
        scrollToTopButton.classList.add('hidden');
    }
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
document.addEventListener('click', function(e) {
    const circle = document.createElement('div');
    circle.classList.add('animation-effect');
    circle.style.left = `${e.clientX - 10}px`;
    circle.style.top = `${e.clientY - 10}px`;
    document.body.appendChild(circle);

    // Remove the circle after the animation is done
    setTimeout(() => {
        circle.remove();
    }, 500);
});
var typed = new Typed('#output', {
    strings: ["MERN STACK Developer.", "Ui/UX Designer."],
    typeSpeed: 40,
    backSpeed: 0,
    fadeOut: true,
    loop: true
});
// Disable right-click context menu
document.addEventListener('contextmenu', function (e) { e.preventDefault(); });
// Disable specific keyboard shortcuts 
document.addEventListener('keydown', function (e) {
    // Check for specific key combinations 
    if (e.ctrlKey && (e.key === 'U' || e.key === 'u' || e.key === 'Shift' || e.key === 'I' || e.key === 'i' || e.key === 'J' || e.key === 'j' || e.key === 'C' || e.key === 'c')) { e.preventDefault(); }
});
