const stop = document.getElementById('stop');
const atention = document.getElementById('atention');
const go = document.getElementById('go');

var time = 0;
setInterval(function () {
    time ++;

    if (time == 1){
        stop.src = './sOff.png';
        atention.src =  './sAtention.png';
    }
    if (time == 2){
        atention.src = './sOff.png';
        go.src = './sGo.png';
    }
    if (time == 3){
        go.src = './sOff.png';
        stop.src = './sStop.png';

    }

    if (time == 3) {
        time = 0
    }

}, 2000);

/*
    
}, time)
setInterval(function () {
    atention.src = './sOff.png';
    go.src = './sGo.png';
}, time + interval)
setInterval(function (){
    go.src = './sOff.png';
    stop.src = './sStop.png';
}, time + interval *2)
*/
