const menuIcon = document.getElementById("menu-icon");
const navMenu = document.querySelector(".nav-links");
const navOverlay = document.getElementById("nav-overlay");
const mainNav = document.querySelector(".main-nav");

function setNavOpen(open) {
    if (!menuIcon || !navMenu) return;
    navMenu.classList.toggle("open", open);
    menuIcon.classList.toggle("animate", open);
    menuIcon.setAttribute("aria-expanded", open ? "true" : "false");
    document.body.classList.toggle("nav-open", open);
    if (navOverlay) {
        navOverlay.hidden = !open;
    }
}

if (menuIcon && navMenu) {
    menuIcon.addEventListener("click", () => {
        setNavOpen(!navMenu.classList.contains("open"));
    });

    navMenu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => setNavOpen(false));
    });
}

if (navOverlay) {
    navOverlay.hidden = true;
    navOverlay.addEventListener("click", () => setNavOpen(false));
}

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        setNavOpen(false);
    }
});

function reveal() {
    const reveals = document.querySelectorAll(".reveal");
    const windowHeight = window.innerHeight;
    const elementVisible = 120;

    reveals.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", reveal, { passive: true });
window.addEventListener("DOMContentLoaded", reveal);

if (mainNav) {
    const updateStuck = () => {
        mainNav.classList.toggle("is-stuck", window.scrollY > 8);
    };
    window.addEventListener("scroll", updateStuck, { passive: true });
    updateStuck();
}

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
        const show = document.body.scrollTop > 200 || document.documentElement.scrollTop > 200;
        scrollToTopBtn.style.display = show ? "flex" : "none";
    }, { passive: true });

    scrollToTopBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}
