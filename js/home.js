document.addEventListener("DOMContentLoaded", function () {
    const slideContainer = document.querySelector(".slide-container");
    const slides = document.querySelectorAll(".slide");
    const prevButton = document.querySelector(".prev-button");
    const nextButton = document.querySelector(".next-button");
    const dotsWrap = document.querySelector(".slider-dots");
    const slider = document.querySelector(".image-slider");

    if (!slideContainer || !slides.length) return;

    let currentSlide = 0;
    const slideCount = slides.length;
    let slideInterval = setInterval(nextSlide, 6000);

    if (dotsWrap) {
        slides.forEach((_, index) => {
            const dot = document.createElement("button");
            dot.type = "button";
            dot.setAttribute("aria-label", `Go to slide ${index + 1}`);
            dot.addEventListener("click", () => {
                currentSlide = index;
                updateSlidePosition();
                resetInterval();
            });
            dotsWrap.appendChild(dot);
        });
    }

    updateSlidePosition();

    if (prevButton) {
        prevButton.addEventListener("click", () => {
            prevSlide();
            resetInterval();
        });
    }

    if (nextButton) {
        nextButton.addEventListener("click", () => {
            nextSlide();
            resetInterval();
        });
    }

    if (slider) {
        slider.addEventListener("mouseenter", () => clearInterval(slideInterval));
        slider.addEventListener("mouseleave", resetInterval);
        slider.addEventListener("keydown", (event) => {
            if (event.key === "ArrowRight") {
                nextSlide();
                resetInterval();
            }
            if (event.key === "ArrowLeft") {
                prevSlide();
                resetInterval();
            }
        });
    }

    function updateSlidePosition() {
        slideContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
        if (dotsWrap) {
            [...dotsWrap.children].forEach((dot, index) => {
                dot.classList.toggle("is-active", index === currentSlide);
            });
        }
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slideCount;
        updateSlidePosition();
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slideCount) % slideCount;
        updateSlidePosition();
    }

    function resetInterval() {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 6000);
    }
});
