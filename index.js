setInterval(setClock, 1000);

let hourHand = document.getElementById("hour");
let minHand = document.getElementById("min");
let secHand = document.getElementById("sec");
let digitalHand = document.getElementById("digital");

function setClock() {
    let currentDate = new Date();

    let seconds = currentDate.getSeconds();
    let minutes = currentDate.getMinutes();
    let hours = currentDate.getHours();

    let secRatio = seconds / 60;
    let minRatio = (seconds / 60 + minutes) / 60;
    let hourRatio = (minRatio + hours) / 12;

    setRotation(secHand, secRatio);
    setRotation(minHand, minRatio);
    setRotation(hourHand, hourRatio);

    updateDigitalClock(hours, minutes, seconds);
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360);
}

function updateDigitalClock(hours, minutes, seconds) {
    let setDigital = (n) => (n < 10 ? "0" + n : n);
    let ampm = hours >= 12 ? "PM" : "AM";
    let displayHour = hours % 12 || 12;

    digitalHand.textContent = `${setDigital(displayHour)}:${setDigital(minutes)}:${setDigital(seconds)} ${ampm}`;
}

setClock();
