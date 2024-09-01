const sideJobs = [
    { name: 'Farmer', gold: 10 },
    { name: 'Tailor', gold: 15 },
    { name: 'Miller', gold: 20 },
    { name: 'Baker', gold: 25 },
    { name: 'Butcher', gold: 30 },
    { name: 'Apothecary', gold: 35 },
    { name: 'Astrologer', gold: 40 },
    { name: 'Carpenter', gold: 45 },
    { name: 'Shoe Maker', gold: 50 },
    { name: 'Merchant', gold: 55 },
    { name: 'Stonemason', gold: 60 },
    { name: 'Weaver', gold: 65 },
    { name: 'Winemaker', gold: 70 },
    { name: 'Fisherman', gold: 75 },
    { name: 'Trumpet Player', gold: 80 },
    { name: 'Roofer', gold: 85 },
    { name: 'Locksmith', gold: 90 },
    { name: 'Tanner', gold: 95 },
    { name: 'Tax Collector', gold: 100 },
    { name: 'Belt Maker', gold: 105 },
    { name: 'Armourer', gold: 110 }
];

const cooldownBase = 3 * 60 * 60 * 1000; // Base cooldown time (3 hours in milliseconds)
const cooldownMultiplier = 1000; // Cooldown multiplier for different gold amounts
let sideJobCooldowns = {}; // Store cooldown end times for each side job
let sideJobList = []; // Store the list of available side jobs

function displaySideJobs() {
    const jobList = document.getElementById('side-job-list');
    const noJobsMessage = document.getElementById('no-jobs-message');
    
    jobList.innerHTML = ''; // Clear current list
    
    if (sideJobList.length === 0) {
        noJobsMessage.innerText = 'No more jobs, check back later you swine!';
        noJobsMessage.style.display = 'block';
    } else {
        noJobsMessage.style.display = 'none';
        sideJobList.forEach(job => {
            const jobItem = document.createElement('div');
            jobItem.className = 'side-job-item';
            jobItem.innerHTML = `
                <p><strong>${job.name} - ${job.gold} Gold</strong></p>
                <button onclick="startSideJob('${job.name}', ${job.gold})">Start Job</button>
                <p id="${job.name}-timer" class="cooldown-timer"></p>
            `;
            jobList.appendChild(jobItem);
            updateCooldownTimer(job.name);
        });
    }
}

function initializeSideJobs() {
    sideJobList = getRandomSideJobs();
    displaySideJobs();
}

function getRandomSideJobs() {
    let shuffled = sideJobs.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 5);
}

function startSideJob(jobName, gold) {
    const now = new Date().getTime();
    if (sideJobCooldowns[jobName] && sideJobCooldowns[jobName] > now) {
        showNotification(`You must wait before completing ${jobName} again.`);
        return;
    }
    // Handle side job logic here (e.g., update user progress)
    const cooldown = getCooldownTime(gold);
    sideJobCooldowns[jobName] = now + cooldown;
    showNotification(`Starting job: ${jobName}. You will receive ${gold} Gold.`);
    sideJobList = sideJobList.filter(job => job.name !== jobName);
    displaySideJobs(); // Refresh job list to update cooldown timers
}

function getCooldownTime(gold) {
    // Cooldown time based on gold amount (e.g., 1 min per 10 Gold)
    return cooldownBase + Math.ceil(gold / 10) * cooldownMultiplier;
}

function updateCooldownTimer(jobName) {
    const timerElement = document.getElementById(`${jobName}-timer`);
    if (!timerElement) return;

    const now = new Date().getTime();
    const endTime = sideJobCooldowns[jobName];
    if (endTime && endTime > now) {
        const remainingTime = endTime - now;
        timerElement.innerText = `Cooldown: ${formatTime(remainingTime)} for ${jobName}`;
        timerElement.style.display = 'block';
    } else {
        timerElement.style.display = 'none';
    }
}

function showNotification(message) {
    const modal = document.getElementById('notification-modal');
    const messageElement = document.getElementById('notification-message');
    messageElement.innerText = message;

    const timerElement = document.getElementById('notification-timer');
    let countdown = 10; // Example countdown duration in seconds

    function updateTimer() {
        countdown--;
        if (countdown <= 0) {
            clearInterval(timerInterval);
            modal.style.display = 'none';
        } else {
            timerElement.innerText = `Time left: ${countdown}s`;
        }
    }

    updateTimer();
    const timerInterval = setInterval(updateTimer, 1000);

    modal.style.display = 'flex';
}

function formatTime(ms) {
    const seconds = Math.floor((ms / 1000) % 60);
    const minutes = Math.floor((ms / (1000 * 60)) % 60);
    const hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
    return `${hours}h ${minutes}m ${seconds}s`;
}

function updateSideJobResetTimer() {
    const resetTimerElement = document.getElementById('side-job-reset-timer');
    const resetTime = new Date().getTime() + cooldownBase;

    function updateResetTimer() {
        const now = new Date().getTime();
        const remainingTime = resetTime - now;
        if (remainingTime <= 0) {
            sideJobList = getRandomSideJobs();
            displaySideJobs();
            resetTimerElement.style.display = 'none';
            clearInterval(resetInterval);
        } else {
            resetTimerElement.innerText = `Next side job reset: ${formatTime(remainingTime)}`;
        }
    }

    updateResetTimer();
    const resetInterval = setInterval(updateResetTimer, 1000);
}

document.addEventListener('DOMContentLoaded', () => {
    initializeSideJobs();
    updateSideJobResetTimer();
});
