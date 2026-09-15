const menuIcon = document.getElementById("menu-icon");
const navMenu = document.querySelector(".nav-links");

if (menuIcon && navMenu) {
    menuIcon.addEventListener("click", () => {
        const open = navMenu.classList.toggle("open");
        menuIcon.classList.toggle("animate");
        menuIcon.setAttribute("aria-expanded", open ? "true" : "false");
        document.body.classList.toggle("nav-open", open);
    });

    navMenu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("open");
            menuIcon.classList.remove("animate");
            menuIcon.setAttribute("aria-expanded", "false");
            document.body.classList.remove("nav-open");
        });
    });
}

function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 120;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", reveal, { passive: true });
window.addEventListener("DOMContentLoaded", reveal);

const navLinks = document.querySelectorAll(".nav-links .nav-item");
navLinks.forEach((link) => {
    if (link.hash) return;
    const file = link.pathname.split("/").pop();
    const current = window.location.pathname.split("/").pop() || "index.html";
    if (file && file === current) {
        link.classList.add("active");
    }
});

const scrollToTopBtn = document.querySelector(".scroll-to-top");
if (scrollToTopBtn) {
    window.addEventListener("scroll", function () {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            scrollToTopBtn.style.display = "flex";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    }, { passive: true });

    scrollToTopBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}
