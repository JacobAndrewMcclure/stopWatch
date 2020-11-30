let originalTime = new Date(0);
countTime = originalTime.setTime(0);
let countMillis = originalTime.setMilliseconds(0);
let countSeconds = originalTime.setSeconds(0);
let countMinutes = originalTime.setMinutes(0);
let countHours = originalTime.setHours(17);

let timeControl;

let testTime = 0;

let timerOn = false;

function startTime() {
    timeControl = setInterval(addTime, 10);
}
function pauseTime() {
    clearInterval(timeControl);
}
function resetTime() {
    clearInterval(timeControl);
    testTime = 0;
    document.getElementById("timeReadOut").innerHTML = testTime;
}
function addTime() {
    testTime++;
    document.getElementById("timeReadOut").innerHTML = testTime;
}