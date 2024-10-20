document.addEventListener("DOMContentLoaded", () => {
    const signInForm = document.getElementById("signInForm");

    signInForm.addEventListener("submit", function (e) {
        // Get form values
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        // Clear any previous error messages
        document.getElementById("emailError").style.display = "none";
        document.getElementById("passwordError").style.display = "none";

        let isValid = true;

        // Email Validation
        if (email === "") {
            document.getElementById("emailError").textContent = "Email is required.";
            document.getElementById("emailError").style.display = "block";
            isValid = false;
        } else if (!validateEmail(email)) {
            document.getElementById("emailError").textContent = "Please enter a valid email address.";
            document.getElementById("emailError").style.display = "block";
            isValid = false;
        }

        // Password Validation
        if (password === "") {
            document.getElementById("passwordError").textContent = "Password is required.";
            document.getElementById("passwordError").style.display = "block";
            isValid = false;
        } else if (password.length < 6) {
            document.getElementById("passwordError").textContent = "Password must be at least 6 characters long.";
            document.getElementById("passwordError").style.display = "block";
            isValid = false;
        }

        // Prevent form submission if validation fails
        if (!isValid) {
            e.preventDefault();
        }
    });

    // Email Validation Function
    function validateEmail(email) {
        const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        return emailPattern.test(email);
    }
});
