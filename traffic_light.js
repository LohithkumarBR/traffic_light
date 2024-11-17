let stopLightElement = document.getElementById("stopLight");
let readyLightElement = document.getElementById("readyLight");
let goLightElement = document.getElementById("goLight");
let stopButtonElement = document.getElementById("stopButton");
let readyButtonElement = document.getElementById("readyButton");
let goButtonElement = document.getElementById("goButton");

function turnOnRed() {
    stopButtonElement.style.backgroundColor = "#cf1124";
    stopLightElement.style.backgroundColor = "#cf1124";
    readyButtonElement.style.backgroundColor = "#4b5069";
    readyLightElement.style.backgroundColor = "#4b5069";
    goButtonElement.style.backgroundColor = "#4b5069";
    goLightElement.style.backgroundColor = "#4b5069";
}


function turnOnYellow() {
    stopButtonElement.style.backgroundColor = "#4b5069";
    stopLightElement.style.backgroundColor = "#4b5069";
    readyButtonElement.style.backgroundColor = "#f7c948";
    readyLightElement.style.backgroundColor = "#f7c948";
    goButtonElement.style.backgroundColor = "#4b5069";
    goLightElement.style.backgroundColor = "#4b5069";
}

function turnOnGreen() {
    stopButtonElement.style.backgroundColor = "#4b5069";
    stopLightElement.style.backgroundColor = "#4b5069";
    readyButtonElement.style.backgroundColor = "#4b5069";
    readyLightElement.style.backgroundColor = "#4b5069";
    goButtonElement.style.backgroundColor = "#199473";
    goLightElement.style.backgroundColor = "#199473";
}