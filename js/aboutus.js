

 // JavaScript to handle pop-up modals for certificate images

        // Get modal elements for Image 1
        const modal1 = document.getElementById("myModal1");
        const img1 = document.getElementById("myImg1");
        const modalImg1 = document.getElementById("img01");
        const captionText1 = document.getElementById("caption1");
        const close1 = document.getElementById("close1");

        // Get modal elements for Image 2
        const modal2 = document.getElementById("myModal2");
        const img2 = document.getElementById("myImg2");
        const modalImg2 = document.getElementById("img02");
        const captionText2 = document.getElementById("caption2");
        const close2 = document.getElementById("close2");

        // Image 1 click handler
        img1.onclick = function () {
            modal1.style.display = "block";
            modalImg1.src = this.src;
            captionText1.textContent = this.alt;
        };

        // Image 2 click handler
        img2.onclick = function () {
            modal2.style.display = "block";
            modalImg2.src = this.src;
            captionText2.textContent = this.alt;
        };

        // Close button handler for Image 1
        close1.onclick = function () {
            modal1.style.display = "none";
        };

        // Close button handler for Image 2
        close2.onclick = function () {
            modal2.style.display = "none";
        };

        // Optional: Close modal when clicking outside the modal content
        window.onclick = function (event) {
            if (event.target === modal1) {
                modal1.style.display = "none";
            }
            if (event.target === modal2) {
                modal2.style.display = "none";
            }
        };

window.addEventListener("scroll", reveal, {passive: true});