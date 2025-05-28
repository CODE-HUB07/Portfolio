
function checkDevice() {
    if (window.innerWidth < 1304) {  // You can adjust the width threshold as needed
        window.location.href = 'mobile-index.html'
    }
}
window.onload = checkDevice;
window.onresize = checkDevice;  
