// Form Submission Event Listener
const form = document.getElementById("EventRegistrationForm");
const submit = form.elements["Register"].value;

document.getElementById("Register").addEventListener("change", (event) => {
    event.preventDefault();
});

// Validate the Number Input
function validateNumbericCode(code) {
    const tickets = /^\d{5}$/;
    return tickets.test(code);
}

// Display Validation Messages
function showNumbericCodeError(numbericCode, message) {
    const errorDisplay = document.createElement("span");
    errorDisplay.innerText = message;
    errorDisplay.className = "error-messge";
    numbericCode.parentElement.appendChild(errorDisplay);
}