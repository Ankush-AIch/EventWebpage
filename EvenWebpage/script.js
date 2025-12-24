const form = document.querySelector("form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (nameInput.value.trim() === "") {
        alert("Please enter your name");
        nameInput.focus();
        return;
    }

    if (emailInput.value.trim() === "") {
        alert("Please enter your email");
        emailInput.focus();
        return;
    }

    if (messageInput.value.trim().length < 10) {
        alert("Message must be at least 10 characters");
        messageInput.focus();
        return;
    }

    alert("Form submitted successfully 🚀");
    form.reset();
});
