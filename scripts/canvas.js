var canvas = document.getElementById("test-canvas");
var color = document.getElementById("color");
var width = document.getElementById("width");
var clear = document.getElementById("clear");
var erase = document.getElementById("erase");
var ctx = canvas.getContext('2d');
var mouse_old = {x:0, y:0};
var mouse = {x:0, y:0};
var paint = false;

color.addEventListener('change', function(e){
    ctx.strokeStyle = this.value;
});
width.addEventListener('change', function(){
    ctx.lineWidth = this.value;
});
clear.addEventListener('click', function(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
});
erase.addEventListener('click', function(){
    eraser();
});
canvas.addEventListener('mousedown', function(e) {
    draw('down');
});
canvas.addEventListener('mousemove', function(e) {
    mouse_old.x = mouse.x;
    mouse_old.y = mouse.y;
    mouse.x = e.clientX-this.offsetLeft;
    mouse.y = e.clientY-this.offsetTop;
    draw('move');
});
canvas.addEventListener('mouseup', function(e) {
    draw('up');
});
canvas.addEventListener('mouseleave', function(e){
    draw('up');
});
function draw(flag){
    if (flag == 'down') {
        paint = true;
    }else if(flag == 'up'){
        paint = false;
    }
    
    if (paint) {
    ctx.beginPath();
    ctx.moveTo(mouse_old.x, mouse_old.y);
    ctx.lineTo(mouse.x, mouse.y);
    ctx.stroke();
    }
}
// eraser
canvas.addEventListener('mousedown', function(e) {
    eraser('down');
});
canvas.addEventListener('mousemove', function(e) {
    mouse_old.x = mouse.x;
    mouse_old.y = mouse.y;
    mouse.x = e.clientX-this.offsetLeft;
    mouse.y = e.clientY-this.offsetTop;
    eraser('move');
});
canvas.addEventListener('mouseup', function(e) {
    eraser('up');
});
canvas.addEventListener('mouseleave', function(e){
    eraser('up');
});
function eraser(flag){
    if (flag == 'down') {
        erase = true;
    }else if(flag == 'up'){
        erase = false;
    }
    
    if (erase) {
    ctx.beginPath();
    ctx.moveTo(mouse_old.x, mouse_old.y);
    ctx.lineTo(mouse.x, mouse.y);
    ctx.clearRect(mouse.x, mouse.y, 5, 5);
    }
}

/*
ctx.moveTo(100,100);
ctx.lineTo(300,100);
ctx.lineTo(200,200);
ctx.closePath();
ctx.stroke();

ctx.strokeRect(50,50,100,50);

ctx.beginPath();
ctx.arc(400,300,100,0,2*Math.PI);
ctx.moveTo(360,240);
ctx.bezierCurveTo(360,260,300,180,320,320);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(400, 100);
ctx.quadraticCurveTo(500, 0, 600, 100);
ctx.strokeStyle = '#00f';
ctx.stroke();

ctx.beginPath();
ctx.moveTo(400, 100);
ctx.bezierCurveTo(500, 300, 550, 100, 600, 100);
ctx.stroke();
ctx.fillStyle = '#f00'; 
ctx.fill();

ctx.fillStyle = '000';
ctx.fillRect(400,0,100,50);

ctx.beginPath();
ctx.arc(75, 75, 50, 0, Math.PI*2, true);
ctx.moveTo(110,75);
ctx.arc(75, 75, 35, 0, Math.PI, false);
ctx.moveTo(65, 65);
ctx.arc(60, 65, 5, 0, Math.PI*2, true);
ctx.moveTo(95, 65);
ctx.arc(90, 65, 5, 0, Math.PI*2, true);
ctx.strokeStyle = '#0000ff';
ctx.stroke();
*/
