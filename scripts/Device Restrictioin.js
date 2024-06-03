
function checkDevice() {
    if (window.innerWidth < 1024) {  // You can adjust the width threshold as needed
        document.body.innerHTML = `
        <div class='device'>
        <div>
            <span>🚧</span>
            <h1>Access Restricted</h1>
            <p>This website is only available on desktop devices. <br>
            Please use Desktop to access this site. </p>
            <p>If your already using Desktop than <br>please <strong> Reload the page</strong></p>
        <div/>
            <div/>
            `;
        
        
    }
}
window.onload = checkDevice;
window.onresize = checkDevice;  
