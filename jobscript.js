function startTimer(button, minutes) {
    button.disabled = true;
    button.style.display = 'none';

    const li = button.parentNode;
    const timerElement = document.createElement('span');
    timerElement.className = 'complete-timer';
    li.appendChild(timerElement);

    let secondsRemaining = minutes * 60;

    const timerInterval = setInterval(() => {
        const minutes = Math.floor(secondsRemaining / 60);
        const seconds = secondsRemaining % 60;
        timerElement.textContent = `Time remaining: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

        if (secondsRemaining === 0) {
            clearInterval(timerInterval);
            timerElement.textContent = 'Completed!';
        }

        secondsRemaining--;
    }, 1000);
}

// Side Jobs reset timer
function startSideJobsTimer() {
    let secondsRemaining = 2.5 * 3600; // 2.5 hours

    const timerElement = document.getElementById('side-jobs-timer');
    const timerInterval = setInterval(() => {
        const hours = Math.floor(secondsRemaining / 3600);
        const minutes = Math.floor((secondsRemaining % 3600) / 60);
        const seconds = secondsRemaining % 60;
        timerElement.textContent = `${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

        if (secondsRemaining === 0) {
            clearInterval(timerInterval);
            // Logic to reset side jobs here
        }

        secondsRemaining--;
    }, 1000);
}

startSideJobsTimer();
