// JavaScript code can be added here for interactivity
// Example: form submission handling

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    // Example: Handle form submission (you can add more validation or backend processing here)
    let formData = new FormData(this);
    let name = formData.get('name');
    let email = formData.get('email');
    let message = formData.get('message');
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    // Example: Show a success message or clear the form
    alert('Message sent successfully!');
    this.reset(); // Clear form fields
});
