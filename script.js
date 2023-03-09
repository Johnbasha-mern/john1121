// Get the HTML elements
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const millisecondsElement = document.getElementById('milliseconds');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

// Initialize variables
let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let stopwatch;

// Start the stopwatch
function start() {
	stopwatch = setInterval(() => {
		milliseconds += 10;
		if (milliseconds === 1000) {
			seconds++;
			milliseconds = 0;
		}
		if (seconds === 60) {
			minutes++;
			seconds = 0;
		}
		if (minutes === 60) {
			hours++;
			minutes = 0;
		}
		display();
	}, 10);
	startButton.disabled = true;
}

// Stop the stopwatch
function stop() {
	clearInterval(stopwatch);
	startButton.disabled = false;
}

// Reset the stopwatch
function reset() {
	clearInterval(stopwatch);
	hours = 0;
	minutes = 0;
	seconds = 0;
	milliseconds = 0;
	display();
	startButton.disabled = false;
}

// Display the stopwatch
function display() {
	hoursElement.innerHTML = hours < 10 ? "0" + hours : hours;
	minutesElement.innerHTML = minutes < 10 ? "0" + minutes : minutes;
	secondsElement.innerHTML = seconds < 10 ? "0" + seconds : seconds;
	millisecondsElement.innerHTML = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;
}

// Add event listeners to the buttons
startButton.addEventListener('click', start);
stopButton.addEventListener('click', stop);
resetButton.addEventListener('click', reset);
