let intervalId = null;
let startTime = 0;
const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
function updateTimer() {
    if (timerDisplay !== null) {
        const currentTime = Date.now();
        const elapsedTime = currentTime - startTime;
        const minutes = Math.floor(elapsedTime / 60000);
        const seconds = Math.floor((elapsedTime % 60000) / 1000);
        const display = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        timerDisplay.textContent = display;
    }
}
if (startButton !== null && stopButton !== null && timerDisplay !== null) {
    startButton.addEventListener('click', () => {
        if (intervalId === null) {
            startTime = Date.now() - (startTime - Date.now());
            intervalId = window.setInterval(updateTimer, 1000);
        }
    });
    stopButton.addEventListener('click', () => {
        if (intervalId !== null) {
            window.clearInterval(intervalId);
            intervalId = null;
        }
    });
    updateTimer(); // Initialize the timer display
}
