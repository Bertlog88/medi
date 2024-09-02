/* Combined CSS from test1.css and test2.css */

/* Body styles updated to align content to the top left */
body {
    font-family: Arial, Helvetica, sans-serif;
    background-color: #2c2c2c;
    color: white;
    margin: 0;
    padding: 0;
    /* Removed flexbox styles to prevent centering */
}

/* Styles from test1.css */
.profile-container {
    width: 100%;
    max-width: 800px;
    padding: 20px;
}

.profile-card {
    background-color: #2a2a2a;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.profile-header {
    display: flex;
    align-items: center;
    border-bottom: 2px solid #333;
    padding-bottom: 20px;
    margin-bottom: 20px;
}

.profile-picture {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 20px;
    border: 4px solid #444;
    position: relative;
    cursor: pointer; /* Ensure it looks clickable */
}

.profile-picture img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.profile-picture input[type="file"] {
    display: none; /* Hide the file input */
}

.profile-info {
    flex-grow: 1;
}

.user-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.username {
    font-size: 28px;
    color: #f0f0f0;
    margin: 0;
}

.level {
    font-size: 18px;
    color: #b0b0b0;
    margin: 0;
}

.account-date {
    font-size: 16px;
    color: #a0a0a0;
    margin: 5px 0 10px 0;
}

.action-buttons {
    display: flex;
    gap: 10px;
}

.action-button {
    background-color: #444;
    color: #f0f0f0;
    border: 2px solid #555;
    border-radius: 12px;
    padding: 10px 15px;
    cursor: pointer;
    font-size: 18px;
    transition: background-color 0.3s;
}

.action-button:hover {
    background-color: #555;
}

.profile-details {
    background-color: #333;
    border-radius: 5px;
    padding: 10px;
}

.land {
    font-size: 18px;
    color: #b0b0b0;
    margin-bottom: 15px;
}

.friends, .enemies {
    margin-bottom: 15px;
    position: relative; /* Required for dropdown positioning */
    overflow: hidden; /* Hide anything that overflows the container */
}

.dropdown-button {
    background-color: #444;
    color: #f0f0f0;
    border: none;
    border-radius: 5px;
    padding: 10px;
    cursor: pointer;
    width: 100%;
    text-align: left;
    position: relative; /* Required for dropdown positioning */
}

.dropdown-button:after {
    content: ' ▼'; /* Add a dropdown arrow */
}

.dropdown-content {
    display: none;
    background-color: #2a2a2a;
    border-radius: 5px;
    padding: 10px;
    position: absolute;
    width: 100%;
    max-height: 150px; /* Limit the height of the dropdown */
    overflow-y: auto; /* Allow scrolling if content exceeds max height */
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    z-index: 1; /* Ensure dropdown content is above other elements */
}

.dropdown-content p {
    margin: 0;
    padding: 5px 0;
}

.dropdown-content p:hover {
    background-color: #444;
}

@media (max-width: 400px) {
    .profile-card {
        width: 90%;
        padding: 20px;
    }
}

/* Modal styles from test2.css */
.modal {
    display: none; /* Hidden by default */
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8); /* Background dimming */
}

.modal-content {
    background-color: #333; /* Dark grey background around the text */
    margin: 5% auto; /* Adjust margin to move content closer to the top */
    padding: 20px;
    border-radius: 15px;
    width: 80%;
    max-width: 500px;
    color: white;
    text-align: center;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
}

.close-btn {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;
}

.close-btn:hover,
.close-btn:focus {
    color: #fff;
    text-decoration: none;
    cursor: pointer;
}

.modal-text {
    font-size: 18px;
    line-height: 1.5;
}
