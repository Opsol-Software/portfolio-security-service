// Home image carasoule
let currentSlide = 0
const totalSlides = document.querySelectorAll(".slide").length

function showSlides(index) {
    const slider = document.querySelector(".slide-container")
    slider.style.transform = `translateX(-${index * 100}%)`
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides
    showSlides(currentSlide)
}

setInterval(nextSlide, 4000)


// About us section 3d slider
const galleryContainer = document.querySelector(".gallery-container")
const galleryControlsContainer = document.querySelector(".gallery-controls")
const galleryControls = ['previous', 'next']
const galleryItems = document.querySelectorAll(".gallery-item")

class Carousel {
    constructor(container, items, controls) {
        this.carouselContainer = container
        this.carouselControls = controls
        this.carouselArray = [...items]
    }

    updateGallery() {
        this.carouselArray.forEach(el => {
            el.classList.remove('gallery-item-1')
            el.classList.remove('gallery-item-2')
            el.classList.remove('gallery-item-3')
        })

        this.carouselArray.slice(0,3).forEach((el, i) => {
            el.classList.add(`gallery-item-${i+1}`)
        })
    }

    setCurrentState(direction) {
        if (direction.className == 'gallery-controls-previous') {
            this.carouselArray.unshift(this.carouselArray.pop())
        } else {
            this.carouselArray.push(this.carouselArray.shift())
        }
        this.updateGallery()
    }

    setControls() {
        this.carouselControls.forEach(control => {
            galleryControlsContainer.appendChild(document.createElement('button')).className = `gallery-controls-${control}`
            document.querySelector(`.gallery-controls-${control}`).innerText = control
        })
    }

    useControls() {
        const triggers = [...galleryControlsContainer.childNodes]
        triggers.forEach(control => {
            control.addEventListener('click', e => {
                // e.preventDefault()
                this.setCurrentState(control)
            })
        })
    }
}

const carousel = new Carousel(galleryContainer, galleryItems, galleryControls)
setInterval(() => {
    carousel.carouselArray.unshift(carousel.carouselArray.pop());
    carousel.updateGallery();
},2000)


function startAnimation() {
    var animation_container = document.getElementById("contact-animation-container")
  
    var animation_left = document.getElementById("animation-left")
    var animation_right = document.getElementById("animation-right")
    var animation_bottom = document.getElementById("animation-bottom")
  
    var windowHeight = window.innerHeight
    var elementTop = animation_container.getBoundingClientRect().top
    var elementVisible = 150
  
    if (elementTop < windowHeight - elementVisible) {
      animation_left.classList.add("slide-in-left")
      animation_right.classList.add("slide-in-right")
      animation_bottom.classList.add("slide-in-bottom")
    }
  
  }

  if (screen.width < 1000) {
    window.addEventListener("DOMContentLoaded", startAnimation, {passive: true})
  } else {
    window.addEventListener("scroll", startAnimation, {passive: true})
  }
