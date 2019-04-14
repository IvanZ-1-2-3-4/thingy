var posx;
var posy;
var i = 0;
var p = 50;
var q = 50;
var info = document.getElementById("info");

function setup() {
    createCanvas(800, 800);
}
  
function draw() {
    setInterval(function() {
        if (i == 500) {
            i = 0;
        } else {
            posx = 400 + (50 * Math.sin((i / p) * Math.PI));
            posy = 400 + (50 * Math.cos((i / q) * Math.PI));
            ellipse(posx, posy, 10, 10);
        }
        i++;
    }, 10);
}

function click1() {
    clear();
    p = 50;
    q = 50;
    info.innerHTML = "p = " + p + "</br> q = " + q;
}

function click2() {
    clear();
    p = 50;
    q = 100;
    info.innerHTML = "p = " + p + "</br> q = " + q;
}

function click3() {
    clear();
    p = 100;
    q = 50;
    info.innerHTML = "p = " + p + "</br> q = " + q;
}

function click4() {
    clear();
    p = 200;
    q = 50;
    info.innerHTML = "p = " + p + "</br> q = " + q;
}