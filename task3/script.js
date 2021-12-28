const trafficlightEL = document.querySelector('#trafficlight');

function makeGreen() {
    trafficlightEL.style.background = ('green');
    trafficlightEL.removeEventListener('click', makeGreen);
    trafficlightEL.addEventListener('click', makeYellow);
}

trafficlightEL.addEventListener('click', makeGreen);

function makeYellow() {
    trafficlightEL.style.background = ('yellow');
    trafficlightEL.removeEventListener('click', makeYellow);
    trafficlightEL.addEventListener('click', makeRed);
}

trafficlightEL.addEventListener('click', makeYellow);

function makeRed() {
    trafficlightEL.style.background = ('red');
    trafficlightEL.removeEventListener('click', makeRed);
    trafficlightEL.addEventListener('click', makeGreen);
}

trafficlightEL.addEventListener('click', makeRed);