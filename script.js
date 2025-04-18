// Get the form and preview elements
const form = document.getElementById("resume-form");
const previewName = document.getElementById("preview-name");
const previewEmail = document.getElementById("preview-email");
const previewPhone = document.getElementById("preview-phone");
const previewExperience = document.getElementById("preview-experience");

// Event listener for when the form is submitted
form.addEventListener("input", function(event) {
    event.preventDefault(); // Prevent form submission (we want to update dynamically)

    // Get values from the form fields
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const experience = document.getElementById("experience").value;

    // Update the preview section with the input values
    previewName.textContent = "Name: " + name;
    previewEmail.textContent = "Email: " + email;
    previewPhone.textContent = "Phone: " + phone;
    previewExperience.textContent = "Experience: " + experience;
});
