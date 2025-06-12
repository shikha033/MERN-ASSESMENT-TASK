let timer;
let minutes = 25;
let seconds = 0;
let isRunning = false;

const timerDisplay = document.getElementById('timer');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

function updateDisplay() {
  let m = minutes.toString().padStart(2, '0');
  let s = seconds.toString().padStart(2, '0');
  timerDisplay.textContent = `${m}:${s}`;
}

function countdown() {
  if (seconds === 0) {
    if (minutes === 0) {
      clearInterval(timer);
      isRunning = false;
      return;
    } else {
      minutes--;
      seconds = 59;
    }
  } else {
    seconds--;
  }
  updateDisplay();
}

startBtn.addEventListener('click', () => {
  if (!isRunning) {
    timer = setInterval(countdown, 1000);
    isRunning = true;
  }
});

stopBtn.addEventListener('click', () => {
  clearInterval(timer);
  isRunning = false;
});

resetBtn.addEventListener('click', () => {
  clearInterval(timer);
  minutes = 25;
  seconds = 0;
  isRunning = false;
  updateDisplay();
});

updateDisplay(); // Initialize display
