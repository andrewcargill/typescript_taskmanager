var intervalId = null;
var startTime = 0;
var timerDisplay = document.getElementById('timer');
var startButton = document.getElementById('startButton');
var stopButton = document.getElementById('stopButton');
function updateTimer() {
    if (timerDisplay !== null) {
        var currentTime = Date.now();
        var elapsedTime = currentTime - startTime;
        var minutes = Math.floor(elapsedTime / 60000);
        var seconds = Math.floor((elapsedTime % 60000) / 1000);
        var display = "".concat(minutes.toString().padStart(2, '0'), ":").concat(seconds.toString().padStart(2, '0'));
        timerDisplay.textContent = display;
    }
}
if (startButton !== null && stopButton !== null && timerDisplay !== null) {
    startButton.addEventListener('click', function () {
        if (intervalId === null) {
            startTime = Date.now() - (startTime - Date.now());
            intervalId = window.setInterval(updateTimer, 1000);
        }
    });
    stopButton.addEventListener('click', function () {
        if (intervalId !== null) {
            window.clearInterval(intervalId);
            intervalId = null;
        }
    });
    updateTimer(); // Initialize the timer display
}
