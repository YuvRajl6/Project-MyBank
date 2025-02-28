
document.getElementById('account-form').addEventListener('submit', function (event) {
    event.preventDefault();




    showSuccessModal();
});


function showSuccessModal() {
    const modal = document.getElementById('success-modal');
    modal.style.display = 'flex'; 

    document.getElementById('close-modal').addEventListener('click', function () {
        modal.style.display = 'none';
    });
}

window.addEventListener('click', function(event) {
    const modal = document.getElementById('success-modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
