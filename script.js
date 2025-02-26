console.log("Script loaded successfully.");

// Form Submission Event Listener
const form = document.getElementById("eventRegistrationForm");
console.log("Form element loaded.");
form.addEventListener("submit", (event) => {
    console.log("Form submission attempted.");
    event.preventDefault();
    });

    // Validate Username
    const username = document.getElementById("username").value;
    if (username === "") {
        alert("Username must be filled out.");
        return;
    }

    // Validtation for Ticket number
    const number = document.getElementById("tickets")
    const errorbox = document.createElement("span");
    tickets.insertAdjacentElement("afterend", errorbox);
    errorbox.style.color ="Blue";

    const ticketValue = tickets.value.trim();  
    function validatePositiveNumber(number) {
    if (number >= 1){
        return true
    }
    return false;
    }
    const ticketNumber = Number(ticketValue);
    if (!validatePositiveNumber(ticketNumber)) {
        errorbox.textContent = "Enter positive number of tickets.";
        console.error("Enter a positive value.");
        return;
    }

    // validate Phone Number
    const phone = document.getElementById("phone").value;
    function validateNumericCode(tel) {
        const pattern = /^\d{10}$/;
        alert("Phone number must be 10 digits.");
        return pattern.test(tel);
    }
    console.log("Phone number validated successfully.");

    //  validatation for checkbox
    document.addEventListener("DOMContentLoaded", () => {
        const checkboxes = document.querySelectorAll('input[name= "eventType"]');
        console.log("Checkboxes selected:", checkboxes);

        checkboxes.forEach((checkbox) => {
            checkbox.addEventListener("change", function () {
                checkboxes.forEach((cb) => {
                    if (cb !== this) cb.checked = false;
                })
            });
        });
    })

// Usage in Validation
if (username == "") {
    showInputError (document. getElementById ("username"), "Username is required");
    }