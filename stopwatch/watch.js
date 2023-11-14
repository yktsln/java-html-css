// Variables for Buttons
const startStopBtn = document.querySelector("#startStopBtn");
const resetBtn = document.querySelector("#resetBtn");

// Variables for time values
let seconds = 0;
let mins = 0;
let hours = 0;

// Variables for leading zeros
let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

// Variables for set interval & timer status
let timerInterval = null;
let timerStatus = "stopped";

function stopWatch() {
    seconds++;

    if (seconds / 60 === 1) {
        seconds = 0;
        mins++;

        if (mins / 60 === 1) {
            mins = 0;
            hours++;
        }
    }

    leadingSeconds = seconds < 10 ? "0" + seconds : seconds;
    leadingMinutes = mins < 10 ? "0" + mins : mins;
    leadingHours = hours < 10 ? "0" + hours : hours;

    let displayTimer = document.getElementById("timer");
    displayTimer.innerText = leadingHours + ":" + leadingMinutes + ":" + leadingSeconds;
}

startStopBtn.addEventListener("click", function () {
    if (timerStatus === "stopped") {
        timerInterval = window.setInterval(stopWatch, 1000);
        document.getElementById("startStopBtn").innerHTML = '<i class="fas fa-pause" id="pause"></i>';
        timerStatus = "started";
    } else {
        window.clearInterval(timerInterval);
        document.getElementById("startStopBtn").innerHTML = '<i class="fas fa-play" id="play"></i>';
        timerStatus = "stopped";
    }
});

resetBtn.addEventListener("click", function () {
    window.clearInterval(timerInterval);
    seconds = 0;
    mins = 0;
    hours = 0;
    document.getElementById("timer").innerText = "00:00:00";
});
