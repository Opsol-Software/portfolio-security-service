document.getElementById("messageForm").addEventListener("submit", function (event) {
    event.preventDefault();
  
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
    if (name && email && message) {
      document.getElementById("responseMessage").textContent = "Your message has been sent!";
      this.reset();
    } else {
      document.getElementById("responseMessage").textContent = "Please fill out all fields.";
      document.getElementById("responseMessage").style.color = "red";
    }
  });
  