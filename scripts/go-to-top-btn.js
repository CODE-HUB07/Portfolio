

function goToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
var y = window.scrollTo();
window.addEventListener('scroll', function() {
    var goToTopBtn = document.getElementById('gotop');
    if (window.scrollTo > 0,100) { // Adjust the scroll position threshold as needed
        goToTopBtn.style.display = 'block';
    } else {
        goToTopBtn.style.display = 'none';
    }
});

