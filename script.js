const form = document.getElementById("EventRegistrationForm");
const submit = form.elements["Register"].value;

document.getElementById("Register").addEventListener("change", (event) => {
    event.preventDefault();
});

function validateNumbericCode(code) {
    const tickets = /^\d{5}$/;
    return tickets.test(code);
}