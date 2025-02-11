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

// // Get the current path without the trailing slash or '.html'
// const activePage = window.location.pathname
//     .replace(/\/$/, '') // Remove trailing slash
//     .replace(/\.html$/, ''); // Remove .html if present

// // Select all navigation links
// const navLinks = document.querySelectorAll('nav a');

// // Loop through each link and add 'active' class if the href matches the current active page
// navLinks.forEach(link => {
//     // Remove any potential trailing slash or .html from the href
//     const linkHref = link.href.replace(window.location.origin, '').replace(/\/$/, '').replace(/\.html$/, '');

//     // Check if the link's href matches the current active page
//     if (linkHref === activePage) {
//         link.classList.add('active');
//     }
// });

