var ballons = [];
var total = 60;


function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
    for(var i = 0; i < total; i++) {
        ballons.push({
            x: random(0, width),
            y:height,
            diameter: random(40, 120),
            speed: random(2,6),
            alpha: 255,
            roc: 1
        })
    }
}

function draw() {
    background(255);
    ballons.forEach(function(ballon) {
        
        if(mouseIsPressed && dist(mouseX, mouseY, ballon.x, ballon.y) < ballon.diameter/2) {
            ballon.roc = 0.95;
        }
        ballon.alpha *= ballon.roc;
        if (ballon.alpha < 0.01) {
            ballon.alpha = 0;
        }
        paint(ballon);
    });
}

function paint(ballon) {
    ballon.y -= ballon.speed;

    if (ballon.y < 0) {
        ballon.y = height;
    }
    ellipse(ballon.x, ballon.y, ballon.diameter, ballon.diameter);
    fill(255, 255, 255, ballon.alpha);
    ellipse(ballon.x + ballon.diameter/4, ballon.y - ballon.diameter/5, ballon.diameter/4, ballon.diameter/4);
    fill(155, 192, 22, ballon.alpha);
    ellipse(ballon.x + ballon.diameter/5, ballon.y - ballon.diameter/6, ballon.diameter/4, ballon.diameter/4);
}