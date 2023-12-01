// Set the target date for the countdown (replace with your desired date)
const targetDate = new Date('December 31, 2023 23:59:59').getTime();

// Update the countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);

// Function to update the countdown
function updateCountdown() {
    const currentDate = new Date().getTime();
    const timeDifference = targetDate - currentDate;

    if (timeDifference > 0) {
        const seconds = Math.floor(timeDifference / 1000);

        // Update the HTML element with the countdown in seconds
        document.getElementById('count').textContent = `${seconds}`;
    } else {
        // If the countdown has reached zero, display a message
        document.getElementById('count').textContent = 'Welcome';
        clearInterval(countdownInterval); // Stop the countdown interval
    }
}
