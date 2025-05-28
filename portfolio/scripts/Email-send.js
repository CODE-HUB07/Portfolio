
  document.getElementById("btn-email").addEventListener("click", (event)=>{
    event.preventDefault(); // Prevent default form submission
    
    var name = document.getElementById("name").value 
    var email = document.getElementById("email").value 
    var message = document.getElementById("message").value

    if ( name == "" || email == "" || message == ""){

      document.querySelector('.missing-values').style.display = "block"
      
      
    } 
    else{
      document.querySelector('.missing-values').style.display = "none"
      
      // Initialize EmailJS with your user ID
      emailjs.init("rAg8ZjmaFTEu0M1lV");
      // Get the form data
      var formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
      };
      // Send the email
      emailjs.send("service_tbol1ll", "template_rxso42d", formData)
        .then((response)=> {
           send_by_me = document.querySelector('.send');
           send_by_me.style.display = 'block';
           not_send = document.querySelector('.wrong');
           not_send.style.display = 'none';
           document.getElementById("feedform").reset();
           
          }, (error)=> {
          send_by_me = document.querySelector('.send');
          send_by_me.style.display = 'none';
          not_send = document.querySelector('.wrong');
          not_send.style.display = 'block';
          not_send_2 = document.querySelector('.wrong-2');
          not_send_2.style.display = 'block';
          not_send_3 = document.querySelector('.wrong-3');
          not_send_3.style.display = 'flex';
           
        });
    }
    
});

function send(){

}