lights()
function lights(){
  var body = document.body

  setTimeout(()=>{
    body.style.filter = 'brightness(0)'
    setTimeout(()=>{
      body.style.filter = 'brightness(0.1)'
      setTimeout(()=>{
        body.style.filter = 'brightness(0.2)'
        setTimeout(()=>{
          body.style.filter = 'brightness(0.3)'
          setTimeout(()=>{
            body.style.filter = 'brightness(0.4)'
            setTimeout(()=>{
              body.style.filter = 'brightness(0.5)'
              setTimeout(()=>{
                body.style.filter = 'brightness(0.6)'
                setTimeout(()=>{
                  body.style.filter = 'brightness(0.7)'
                  setTimeout(()=>{
                    body.style.filter = 'brightness(0.8)'
                    setTimeout(()=>{
                      body.style.filter = 'brightness(0.9)'
                      setTimeout(()=>{
                        body.style.filter = 'brightness(1)'
                      },100)
                    },100)
                  },100)
                },100)
              },100)
            },100)
          },100)
        },100)
      },100)
    },100)
  },100) 
  
 
}
function side_nav() {
  var sidenav = document.querySelector("ul");
  sidenav.style.right = "-2%";
  document.querySelector(".lower-body").style.filter = "blur(5px)";
}
function close_nav() {
  var sidenav = document.querySelector("ul");
  sidenav.style.right = "-45%";
  document.querySelector(".lower-body").style.filter = "blur(0px)";
}
function contact() {
  var contact = document.querySelector(".contact");
  contact.innerHTML = '<img src="../img/icons8-contact-50.png" alt="">';
}
function contact_out() {
  var contact = document.querySelector(".contact");
  contact.innerHTML = "Contact";
}
function home() {
  var home = document.querySelector(".home");
  home.innerHTML = ' <img src="../img/icons8-home-50.png" alt="">';
}
function home_out() {
  var home = document.querySelector(".home");
  home.innerHTML = "Home";
}
function about() {
  var about = document.querySelector(".about");
  about.innerHTML = ' <img src="../img/icons8-about-48.png" alt="">';
}
function about_out() {
  var home = document.querySelector(".about");
  home.innerHTML = "About";
}
function service() {
  var service = document.querySelector(".service");
  service.innerHTML = ' <img src="../img/icons8-service-50.png" alt="">';
}
function service_out() {
  var service = document.querySelector(".service");
  service.innerHTML = "Services";
}
function project() {
  var project = document.querySelector(".project");
  project.innerHTML = ' <img src="../img/icons8-project-50.png" alt="">';
}
function project_out() {
  var project = document.querySelector(".project");
  project.innerHTML = "Projects";
}
function gith() {
  var github = document.querySelector(".giticon");
  github.innerHTML = '<img src="../img/icons8-github-32.png" alt="">';
}
function githout() {
  var github = document.querySelector(".giticon");
  github.innerHTML = '<img src="../img/white-github.png">';
}
function insta(){
    let insta = document.querySelector('.insta');
    insta.innerHTML = '<img src="../img/icons8-instagram-50.png" alt="" height="22px">';
}
function instaout(){
    let insta = document.querySelector('.insta');
    insta.innerHTML = '<img src="../img/white-insta.png" alt="" height="22px">';
}
function what(){
    let what = document.querySelector('.what');
    what.innerHTML = '<img src="../img/icons8-whatsapp-24.png" alt="" height="22px">';
}


var corsur = document.querySelector('.cursor');
document.body.addEventListener('mousemove',(dets)=>{
    corsur.style.top = `${dets.screenY - 80}px`
    corsur.style.left = `${dets.screenX - 20}px`
})




function Projects(){
  document.body.scrollTo(0,1570);
}
function Home(){

  document.body.scrollTo(0,0);
}
function Contact(){
  document.body.scrollTo(0,2300);
}
function About(){
  document.body.scrollTo(0,800);
}


function open_certi() {
   document.querySelector(".parent-certi").style.display = 'block';
 
}
function closecerti() {
   document.querySelector(".parent-certi").style.display = 'none';
}