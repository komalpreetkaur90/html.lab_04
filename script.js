const form = document.getElementById("EventRegistrationForm");
const username = form.elements["username"].value;

document.getElementById("username").addEventListener("change", (event) => {
    event.preventDefault();
});

