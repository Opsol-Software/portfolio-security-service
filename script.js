// document.getElementById('contactForm').addEventListener('submit', function(e) {
//     e.preventDefault();
//     alert('Thank you for reaching out! We will get back to you soon.');
// });

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

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
  
  window.addEventListener("scroll", reveal, {passive: true});


//   document.addEventListener("DOMContentLoaded", () => {
//     const slides = document.querySelectorAll(".slide");
//     const prevButton = document.querySelector(".prev");
//     const nextButton = document.querySelector(".next");
//     let currentSlide = 0;

//     function showSlide(index) {
//         slides.forEach((slide, i) => {
//             slide.classList.remove("active");
//             if (i === index) {
//                 slide.classList.add("active");
//             }
//         });
//     }

//     nextButton.addEventListener("click", () => {
//         currentSlide = (currentSlide + 1) % slides.length; // Loop to the first slide
//         showSlide(currentSlide);
//     });

//     prevButton.addEventListener("click", () => {
//         currentSlide = (currentSlide - 1 + slides.length) % slides.length; // Loop to the last slide
//         showSlide(currentSlide);
//     });

//     // Initialize the first slide
//     showSlide(currentSlide);
// });
