//variables for hours, min, sec & milliseconds
let countMillis = 0;
let countSeconds = 0;
let countMinutes = 0;
let countHours = 0;
//variable for interval function
let milliControl;
//variable for if time is running or not
let timerOn = false;

//runs function if start button is pushed
function startTime() {
    //Runs function every 0.01 seconds if timer is on
    if (timerOn == false) {
        milliControl = setInterval(addMillis, 10);
        timerOn = true;
    //does nothing if timer is already on
    } else {

    }
}
//pauses stop watch
function pauseTime() {
    clearInterval(milliControl);
    timerOn = false;
}

//resets time
function resetTime() {
    //stops milli interval so clock doesn't count
    clearInterval(milliControl);
    timerOn = false;
    //reset variables
    countMillis = 0;
    countSeconds = 0;
    countMinutes = 0;
    countHours = 0;
    //updates time to display 0
    document.getElementById("milliDisplay").innerHTML = "0" + countMillis;
    document.getElementById("secDisplay").innerHTML = "0" + countSeconds + ":";
    document.getElementById("minDisplay").innerHTML = "0" + countMinutes + ":";
    document.getElementById("hourDisplay").innerHTML = countHours + ":";
}

function addMillis() {
    //function increments seconds
    if (countMillis >= 99) {
        countMillis = 0;
        countSeconds++;
        document.getElementById("milliDisplay").innerHTML = "0" + countMillis;
    } else if (countMillis <= 8) {
        countMillis++;
        document.getElementById("milliDisplay").innerHTML = "0" + countMillis;
    } else {
        countMillis++;
        document.getElementById("milliDisplay").innerHTML = countMillis;
    }
    //increments minutes based on seconds
    if (countSeconds >= 60) {
        countSeconds = 0;
        countMinutes++;
        document.getElementById("secDisplay").innerHTML = "0" + countSeconds + ":";
    } else if (countSeconds <= 9) {
        document.getElementById("secDisplay").innerHTML = "0" + countSeconds + ":";
    } else {
        document.getElementById("secDisplay").innerHTML = countSeconds + ":";
    }
    //increaments hours based on minutes
    if (countMinutes >= 60) {
        countMinutes = 0;
        countHours++;
        document.getElementById("minDisplay").innerHTML = "0" + countMinutes + ":";
        document.getElementById("hourDisplay").innerHTML = countHours + ":";
    } else if (countMinutes <= 9) {
        document.getElementById("minDisplay").innerHTML = "0" + countMinutes + ":";
        document.getElementById("hourDisplay").innerHTML = countHours + ":";
    } else {
        document.getElementById("minDisplay").innerHTML = countMinutes + ":";
        document.getElementById("hourDisplay").innerHTML = countHours + ":";
    }
}