setInterval(setClock,1000)

let hourHand = document.getElementById("hour");
let minHand = document.getElementById("min");
let secHand = document.getElementById("sec");

function setClock(){
    let currentDate = new Date();
    let secRatio=currentDate.getSeconds() / 60;
    let minRatio=(secRatio + currentDate.getMinutes()) / 60;
    let hourRatio=(minRatio+ currentDate.getHours()) / 12;

    setRotation(secHand , secRatio);
    setRotation(minHand , minRatio);
    setRotation(hourHand , hourRatio);
}

function setRotation(e,r){
    e.style.setProperty('--rotation',r * 360);
}

setClock()