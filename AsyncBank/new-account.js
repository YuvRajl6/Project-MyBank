// Show the modal when form is submitted successfully
document.getElementById('account-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Here you can add form validation or AJAX requests to handle data submission

    // Display the success modal
    showSuccessModal();
});

// Function to show success modal
function showSuccessModal() {
    const modal = document.getElementById('success-modal');
    modal.style.display = 'flex';  // Make the modal visible

    // Close modal when clicking on 'X' button
    document.getElementById('close-modal').addEventListener('click', function () {
        modal.style.display = 'none';
    });
}

// Close the modal when clicking outside the modal content
window.addEventListener('click', function(event) {
    const modal = document.getElementById('success-modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
