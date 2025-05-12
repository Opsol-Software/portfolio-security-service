const menuIcon = document.getElementById("menu-icon")
const dropmenu = document.querySelector(".dropdown-menu")

menuIcon.addEventListener("click", () => {
    dropmenu.classList.toggle("hidden")
    menuIcon.classList.toggle("animate")
    

})


// section reveal animation
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
}

// Active page indicator
const activePage = window.location.pathname.endsWith("/") 
    ? "/portfolio-security-service/index.html" 
    : window.location.pathname;

const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    if (link.href.endsWith(activePage)) {
        link.classList.add('active');
    }
});


