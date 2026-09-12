// Get form elements

const form = document.getElementById("studentForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const bioInput = document.getElementById("bio");


// Get error elements

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");


// Bio elements

const charCount = document.getElementById("charCount");
const bioWarning = document.getElementById("bioWarning");


// Submit button

const submitBtn = document.getElementById("submitBtn");


// Table

const studentTableBody =
    document.getElementById("studentTableBody");


// Validation variables

let nameValid = false;
let emailValid = false;
let passwordValid = false;
let bioValid = true;


// ----------------------------------------
// NAME VALIDATION
// ----------------------------------------

nameInput.addEventListener("input", function () {

    const name = nameInput.value.trim();

    if (name === "") {

        nameError.textContent = "Name is required.";

        nameValid = false;

    } else {

        nameError.textContent = "";

        nameValid = true;
    }

    checkForm();
});


// ----------------------------------------
// EMAIL VALIDATION
// ----------------------------------------

emailInput.addEventListener("input", function () {

    const email = emailInput.value.trim();

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (email === "") {

        emailError.textContent = "Email is required.";

        emailValid = false;

    } else if (!emailPattern.test(email)) {

        emailError.textContent =
            "Please enter a valid email.";

        emailValid = false;

    } else {

        emailError.textContent = "";

        emailValid = true;
    }

    checkForm();
});


// ----------------------------------------
// PASSWORD VALIDATION
// ----------------------------------------

passwordInput.addEventListener("input", function () {

    const password = passwordInput.value;


    if (password === "") {

        passwordError.textContent =
            "Password is required.";

        passwordValid = false;

    } else if (password.length < 6) {

        passwordError.textContent =
            "Password must contain at least 6 characters.";

        passwordValid = false;

    } else {

        passwordError.textContent = "";

        passwordValid = true;
    }

    checkForm();
});


// ----------------------------------------
// BIO CHARACTER COUNTER
// ----------------------------------------

bioInput.addEventListener("input", function () {

    const currentLength = bioInput.value.length;

    const maxLength = 200;


    // Update counter

    charCount.textContent =
        currentLength + " / " + maxLength + " characters";


    // Bio is valid as long as it is within 200 characters

    if (currentLength <= maxLength) {

        bioValid = true;

    } else {

        bioValid = false;
    }


    // Warning message

    if (currentLength >= 180 && currentLength < 200) {

        bioWarning.textContent =
            "You are close to the character limit.";

    } else if (currentLength === 200) {

        bioWarning.textContent =
            "Character limit reached.";

    } else {

        bioWarning.textContent = "";
    }


    checkForm();
});


// ----------------------------------------
// CHECK FORM VALIDITY
// ----------------------------------------

function checkForm() {

    if (
        nameValid &&
        emailValid &&
        passwordValid &&
        bioValid
    ) {

        submitBtn.disabled = false;

    } else {

        submitBtn.disabled = true;
    }
}


// ----------------------------------------
// FORM SUBMIT
// ----------------------------------------

form.addEventListener("submit", function (event) {

    event.preventDefault();


    // Get values

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value;
    const bio = bioInput.value.trim();


    // Create table row

    const row = document.createElement("tr");


    // Name

    const nameCell = document.createElement("td");

    nameCell.textContent = name;


    // Email

    const emailCell = document.createElement("td");

    emailCell.textContent = email;


    // Password

    const passwordCell = document.createElement("td");

    passwordCell.textContent =
        "*".repeat(password.length);


    // Bio

    const bioCell = document.createElement("td");

    bioCell.textContent = bio;


    // Action

    const actionCell = document.createElement("td");

    const deleteButton =
        document.createElement("button");


    deleteButton.textContent = "Delete";

    deleteButton.className = "delete-btn";


    // Delete row

    deleteButton.addEventListener("click", function () {

        row.remove();

    });


    actionCell.appendChild(deleteButton);


    // Add cells to row

    row.appendChild(nameCell);
    row.appendChild(emailCell);
    row.appendChild(passwordCell);
    row.appendChild(bioCell);
    row.appendChild(actionCell);


    // Add row to table

    studentTableBody.appendChild(row);


    // Reset form

    form.reset();


    // Reset validation

    nameValid = false;
    emailValid = false;
    passwordValid = false;
    bioValid = true;


    // Reset error messages

    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";


    // Reset counter

    charCount.textContent =
        "0 / 200 characters";

    bioWarning.textContent = "";


    // Disable button

    submitBtn.disabled = true;

});