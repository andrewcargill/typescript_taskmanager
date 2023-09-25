let intervalId: number | null = null;
let startTime: number = 0;

const timerDisplay: HTMLDivElement | null = document.getElementById('timer') as HTMLDivElement | null;
const startButton: HTMLButtonElement | null = document.getElementById('startButton') as HTMLButtonElement | null;
const stopButton: HTMLButtonElement | null = document.getElementById('stopButton') as HTMLButtonElement | null;

function updateTimer() {
    if (timerDisplay !== null) {
        const currentTime: number = Date.now();
        const elapsedTime: number = currentTime - startTime;
        const minutes: number = Math.floor(elapsedTime / 60000);
        const seconds: number = Math.floor((elapsedTime % 60000) / 1000);
        const display: string = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
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
