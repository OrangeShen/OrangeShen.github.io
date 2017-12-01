
function setup() {
    createCanvas(800, 1000);
    noStroke();

}

function draw() {
    //frame
    background(175, 175, 175);



    push();
    noFill();
    stroke(226, 157, 0);
    strokeWeight(40);
    rect(0, 0, 800, 1000);

    stroke(164, 124, 22);
    strokeWeight(10);
    rect(20,20,760,960);

    stroke(226, 157, 0);
    strokeWeight(20);
    rect(30, 30, 740, 940);

    
    stroke(164, 124, 22);
    strokeWeight(5);
    rect(65,65,670,870);

    stroke(226, 157, 0);
    strokeWeight(5);
    rect(68, 68, 664, 864);

    stroke(105, 75, 0);
    strokeWeight(5);
    rect(75,75,650,850);
    pop();
    
    

    fill(220,155,236);
    ellipse(400,1000,800,900,PI,2*PI);

    //head
    fill(238, 211, 164);
    bezier(670, 500, 500, -100,300, -100 , 130,500);
    fill(238, 211, 164);
    bezier(670, 500, 480, 900,320, 900 , 130,500);
    //mouse
    fill(224, 0, 0);
    arc(400, 550, 300,300,0, PI);
    //brows
    
    push();
    noFill();
    stroke(0,0,0);
    strokeWeight(4);
    arc(350,420,60,33,radius(210), radius(330));
    arc(450,420,60,33,adius(210), radius(330));
    pop();


    //left eye
    fill(255,255,255);
    ellipse(350,450,60,33);
    strokeWeight(10);
    fill(255, 151, 174);
    translate(50, 0);
    ellipse(300, 450, 33, 33);  
    fill(255,177,210);
    ellipse(300,450,25,25);
    //right eye
    fill(255,255,255);
    ellipse(400,450,60,33);
    strokeWeight(10);
    fill(255, 151, 174);
    translate(50, 0);
    ellipse(350, 450, 33, 33);  
    fill(255,177,210);
    ellipse(350,450,25,25);
    //

    fill(0,0,0);
    ellipse(300,450,5,5,0,2*PI);

    

}