
  document.getElementById("btn").addEventListener("click", function(event){
    event.preventDefault(); // Prevent default form submission
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
      .then(function(response) {
         send_by_me = document.querySelector('.send');
         send_by_me.style.display = 'block';
         not_send = document.querySelector('.wrong');
         not_send.style.display = 'none';
         document.getElementById("feedform").reset();
         
        }, function(error) {
        send_by_me = document.querySelector('.send');
        send_by_me.style.display = 'none';
        not_send = document.querySelector('.wrong');
        not_send.style.display = 'block';
         
      });
});

function send(){

}