var canvas = document.getElementById("test-canvas");
var stop = document.getElementById("stop");
var ctx = canvas.getContext('2d');
var step = 0;

ctx.beginPath();
ctx.arc(200, 200, 50, 0, Math.PI*2);
ctx.fillStyle = '#fde';
ctx.fill();
ctx.stroke();

var move = setInterval(function() {
    if (step > canvas.width) {
        step -= 100;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.arc(200-step, 200, 50, 0, Math.PI*2);
        ctx.fillStyle = '#fde';
        ctx.fill();
    }else {
        step += 100;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.arc(200+step, 200, 50, 0, Math.PI*2);
        ctx.fillStyle = '#fde';
        ctx.fill();
    }
}, 500);

stop.addEventListener('click', function() {
    clearInterval(move);
})
