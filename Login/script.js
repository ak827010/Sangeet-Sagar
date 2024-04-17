function openLoginPopup() {
    document.getElementById('loginPopup').style.display = 'block';
}

function openRegistrationPopup() {
    document.getElementById('registrationPopup').style.display = 'block';
}

function closePopup(popupId) {
    document.getElementById(popupId).style.display = 'none';
}

document.getElementById('forgotPasswordLink').addEventListener('click', function(event) {
    event.preventDefault();
    alert("Show forgot password form");
});

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let emailMobile = document.getElementById('emailMobile').value;
    let password = document.getElementById('password').value;

    // Validation and submission logic goes here
    alert("Perform login validation and submit form data");
});

document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let name = document.getElementById('regName').value;
    let email = document.getElementById('regEmail').value;
    let phone = document.getElementById('regPhone').value;
    let password = document.getElementById('regPassword').value;
    let confirmPassword = document.getElementById('regConfirmPassword').value;

    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
    }

    // Validation and submission logic goes here
    alert("Perform registration validation and submit form data");
});
