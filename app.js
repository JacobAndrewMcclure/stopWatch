let countMillis = 0;
let countSeconds = 0;
let countMinutes = 0;
let countHours = 0;

let displayTime;

let milliControl;
let secondControl;
let minuteControl;
let hourControl;

let testTime = 0;

let timerOn = false;

function startTime() {
    milliControl = setInterval(addMillis, 1000 / 100);
    secondControl = setInterval(addSeconds, 1000);
    minuteControl = setInterval(addMinutes, 1000 * 60);
    hourControl = setInterval(addHours, 1000 * 3600)
}
function pauseTime() {
    clearInterval(milliControl);
    clearInterval(secondControl);
    clearInterval(displayTime);
}
function resetTime() {
    clearInterval(milliControl);
    clearInterval(secondControl);
    clearInterval(displayTime);
    clearInterval(hourControl);
    
    countMillis = 0;
    countSeconds = 0;
    countMinutes = 0;
    countHours = 0;
    
    document.getElementById("milliDisplay").innerHTML = countMillis + "0";
    document.getElementById("secDisplay").innerHTML = countSeconds + "0:";
    document.getElementById("minDisplay").innerHTML = countMinutes + "0:";
    document.getElementById("hourDisplay").innerHTML = countHours + "0:";
}

function addMillis() {
    if (countMillis >= 99) {
        countMillis = 0;
        document.getElementById("milliDisplay").innerHTML = countMillis;
    } else {
        countMillis++;
        document.getElementById("milliDisplay").innerHTML = countMillis;
    }
}
function addSeconds() {
    if (countSeconds >= 59) {
        countSeconds = 0;
        document.getElementById("secDisplay").innerHTML = countSeconds + ":";
    } else {
        countSeconds++;
        document.getElementById("secDisplay").innerHTML = countSeconds + ":";
    }
}
function addMinutes() {
    if (countMinutes >= 59) {
        countMinutes = 0;
        document.getElementById("minDisplay").innerHTML = countMinutes + ":";
    } else {
        countMinutes++;
        document.getElementById("minDisplay").innerHTML = countMinutes + ":";
    }
}
function addHours() {
    countHours++;
    document.getElementById("hourDisplay").innerHTML = countHours + ":";
}