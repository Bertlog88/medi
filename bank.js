function openPopup(id) {
    document.getElementById(id).style.display = 'block';
}

function closePopup(id) {
    document.getElementById(id).style.display = 'none';
}

function depositGold() {
    // Implement deposit logic
    closePopup('deposit-popup');
}

function withdrawGold() {
    // Implement withdraw logic
    closePopup('withdraw-popup');
}

function transferGold() {
    // Implement transfer logic
    closePopup('transfer-popup');
}
