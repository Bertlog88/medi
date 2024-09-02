// Function to show the modal
function showWelcomeModal() {
    const modal = document.getElementById('welcome-modal');
    if (modal) {
        modal.style.display = 'block';
    } else {
        console.error("Modal element not found");
    }
}

// Function to close the modal
function closeWelcomeModal() {
    const modal = document.getElementById('welcome-modal');
    if (modal) {
        modal.style.display = 'none';
    } else {
        console.error("Modal element not found");
    }
}

// Trigger the modal when the page loads (for demo purposes)
window.onload = function() {
    showWelcomeModal();
};
