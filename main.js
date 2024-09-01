// Function to show the modal
function showWelcomeModal() {
    document.getElementById('welcome-modal').style.display = 'block';
}

// Function to close the modal
function closeWelcomeModal() {
    document.getElementById('welcome-modal').style.display = 'none';
}

// Trigger the modal when the page loads (for demo purposes)
window.onload = function() {
    showWelcomeModal();
};
