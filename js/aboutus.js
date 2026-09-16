const modal1 = document.getElementById("myModal1");
const img1 = document.getElementById("myImg1");
const modalImg1 = document.getElementById("img01");
const captionText1 = document.getElementById("caption1");
const close1 = document.getElementById("close1");

const modal2 = document.getElementById("myModal2");
const img2 = document.getElementById("myImg2");
const modalImg2 = document.getElementById("img02");
const captionText2 = document.getElementById("caption2");
const close2 = document.getElementById("close2");

function openModal(modal, modalImg, caption, source) {
    if (!modal || !source) return;
    modal.style.display = "block";
    if (modalImg) {
        modalImg.src = source.src;
        modalImg.alt = source.alt || "";
    }
    if (caption) caption.textContent = source.alt || "";
}

function closeModal(modal) {
    if (modal) modal.style.display = "none";
}

if (img1) {
    img1.style.cursor = "zoom-in";
    img1.addEventListener("click", () => openModal(modal1, modalImg1, captionText1, img1));
}

if (img2) {
    img2.style.cursor = "zoom-in";
    img2.addEventListener("click", () => openModal(modal2, modalImg2, captionText2, img2));
}

if (close1) close1.addEventListener("click", () => closeModal(modal1));
if (close2) close2.addEventListener("click", () => closeModal(modal2));

window.addEventListener("click", (event) => {
    if (event.target === modal1) closeModal(modal1);
    if (event.target === modal2) closeModal(modal2);
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeModal(modal1);
        closeModal(modal2);
    }
});
