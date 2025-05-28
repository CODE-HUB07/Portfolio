document.getElementById("email").addEventListener("input", function() {
    const emailInput = this;
    const emailError = document.querySelector(".EmailVerify");
    const email = emailInput.value.trim();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) {
        emailError.textContent = "❌ Invalid email format";
        document.querySelector('.EmailVerify').style.display = 'block';
        emailInput.style.border = "2px solid red";
        
    } else {

        emailError.textContent = "✅ Email is valid!";
        document.querySelector('.EmailVerify').style.display = 'none';
        emailInput.style.border = "";

        console.log('Email Verification service Started')
async function checkEmail(email) {
    console.log('fetching response from emailVerify !')
    const apiKey = "53f90f3184f964615bca454d77bea23a"; 
    const url = `https://apilayer.net/api/check?access_key=${apiKey}&email=${email}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.format_valid && data.mx_found && data.smtp_check) {

            var msg = document.querySelector('.EmailVerify');
            msg.style.display = 'none';
            console.log('The Email is Valid !');
            document.querySelector('#btn-email').style.display = 'block';
            
        } else {
            
            var msg = document.querySelector('.EmailVerify');
            document.querySelector('#email').style.border = '"2px solid red"'
            msg.innerHTML = '<span>Alert : </span>Email is not Valid or maybe incorrect'
            document.querySelector('#btn-email').style.display = 'none';
            msg.style.display = 'block';
            console.warn("Invalid or Fake Email !");

        }
    } catch (error) {
        console.error("Error checking email:", error);
    }
}

document.getElementById("email").addEventListener("change", (event) => {
    checkEmail(event.target.value);
});


    }
});
// ------------------------------------------------------------
