let dragons = [];
let clouds=[];
let rolls = []; // To manage Roll objects independently

function setup() {
    const canvas = createCanvas(1000, 490);
    pixelDensity(2);
    canvas.parent('myCanvas');

    background(255, 245, 235);
    
    // Create multiple dragons
    let l = getOddLength();
    for (let i = 0; i < l; i++) {
        dragons.push(new Dragon(random(width), random(height), l));
        l = getOddLength();
    }

    // Create multiple clouds and associated rolls
    for (let i = 0; i < 10; i++) {
        let x;
        if (random() < 0.5) {
            // 50% chance for x to be in range 0-100
            x = random(0, 100);
        } else {
            // 50% chance for x to be in range 500-600
            x = random(800,1000);
        }
        let y = random(height);   //save the random variables then reuse for rolls
        clouds.push(new Cloud(x, y));
        
    }


}

function getOddLength() {
    let l = random(7, 19);
    if (l % 2 == 1) {
        l += 1;
    }
    return l;
}

function draw() {
    background(255, 240, 245);

    
    fill('lightblue')
    //draw background hills and skyscape
  
    arc(400, 500, 80, 300, radians(180), radians(360));
    arc(200, 500, 80, 600, radians(180), radians(360));
    arc(240, 500, 60, 200, radians(180), radians(360));
    arc(170, 500, 100, 500, radians(180), radians(360));
    
    arc(800, 500, 80, 300, radians(180), radians(360));
    arc(600, 500, 80, 600, radians(180), radians(360));
    arc(640, 500, 60, 200, radians(180), radians(360));
    arc(570, 500, 100, 500, radians(180), radians(360));
    

    // Update and display each dragon
    for (let dragon of dragons) {
        dragon.move();
        dragon.display();
    }

    // Draw clouds
    for (let cloud of clouds) {
        cloud.display();
    }

    for (let roll of rolls){
        roll.move(); // Animate the spiral
        roll.display();
    }

    
   
}

class Cloud {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.rightRoll = new Roll(x+25, y+9, 'red', 10, 12.6);
        rolls.push(this.rightRoll);
        this.centerRoll = new Roll(x, y, 'red', 20,17.8);
        rolls.push(this.centerRoll);
        this.leftRoll = new Roll(x-22, y+10, 'red', 20,11.1);
        rolls.push(this.leftRoll);
    }

    display() {
        fill(255,0,0);
        ellipse(this.x+4, this.y, 64, 48); //CLOUD Borders
        ellipse(this.x + 26, this.y + 10, 53, 35);
        ellipse(this.x - 20, this.y + 10, 53, 35);
        fill(255, 255, 255); // White color with slight transparency
        
        ellipse(this.x+4, this.y, 60, 46); //CLOUD BASE****
        ellipse(this.x + 26, this.y + 10, 50, 32);
        ellipse(this.x - 20, this.y + 10, 50, 32);
       
    }
}

class Roll {
    constructor(x, y, color, strokeWidth, rollSize) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.angle = 0.0; // Initial angle for the spiral
        this.radius = 1; // Base radius for the spiral
        this.offset = 0.1;
        this.scalar = 1;
        this.speed = 0.03; // Controls how fast the spiral grows
        this.strokeWidth = strokeWidth;
        this.rollSize = rollSize;
    }

    display() {
        push();
        noFill();
        stroke(this.color); // Use the color provided in the constructor
        strokeWeight(1);

        translate(this.x, this.y); // Shift the coordinate system to (this.x, this.y)
        
        //TODO: limit the spiral and change position to next cloud
        // Draw the spiral
        beginShape();
        
        for (let t = 0; t < this.angle; t += 0.01) {
            let r = this.radius + t * .9; 
            if (r<this.rollSize){
                // Spiral radius increases over time
                let x = r * cos(t);
                let y = r * sin(t);
                vertex(x, y);
            } 
        }
        //rollSize=0
        endShape();
        pop();
    }
    move() {
        this.angle += this.speed; // Increment the angle to animate the spiral
    }
    
}   


class Ball {
    constructor(x, y, r, color) {
        this.x = x;
        this.y = y;
        this.r = r + 3;
        this.color = color;  // Set the color when the Ball is created
    }

    display() {
        noStroke();
        fill(this.color); // Use the color passed into the constructor
        ellipse(this.x, this.y, this.r+5);
        rect(this.x - this.r / 2 + 2, this.y - this.r / 2, this.r - 2, this.r - 5,.5);
        this.drawMultipleArcs(this.x, this.y - 3);
        this.drawRowThree(this.x, this.y - 3);
        this.drawMultipleArcs(this.x, this.y + 8);
        this.drawRowThree(this.x, this.y +8);
    }

    // Function to draw multiple arcs with two colors, ensuring they stay within the radius
    drawMultipleArcs(x, y) {
        // Draw the first arc (color 1)
        fill('gold');
        arc(x - 5, y - 4, this.r / 2.5, this.r / 2.5, radians(0), radians(180));
        arc(x + 4, y - 4, this.r / 2.5, this.r / 2.5, radians(0), radians(180));

        // Draw the second arc (color 2)
        fill(this.color);
        arc(x - 5, y - 4, this.r / 3.5, this.r / 3.5, radians(0), radians(180));
        arc(x + 4, y - 4, this.r / 3.5, this.r / 3.5, radians(0), radians(180));
    }

    // Function to draw a row of arcs with a more constrained layout
    drawRowThree(x, y) {
        const offsetY = 1; // Vertical offset to prevent arcs from overlapping the top part of the ball
        const maxXOffset = this.r / 3.5; // Limit horizontal movement within radius

        // Draw first set of arcs (green)
        fill('gold');
        arc(x - maxXOffset, y + offsetY - 1, this.r / 2.5, this.r / 1.5, radians(0), radians(180));
        arc(x, y + offsetY - 1, this.r / 2.5, this.r / 1.5, radians(0), radians(180));
        arc(x + maxXOffset, y + offsetY - 1, this.r / 2.5, this.r / 1.5, radians(0), radians(180));

        // Draw second set of arcs (purple)
        fill(this.color);
        arc(x - maxXOffset, y + offsetY, this.r / 3.5, this.r / 2.5, radians(0), radians(180));
        arc(x, y + offsetY, this.r / 3.5, this.r / 2.5, radians(0), radians(180));
        arc(x + maxXOffset, y + offsetY, this.r / 3.5, this.r / 2.5, radians(0), radians(180));
    }
}

class Dragon {
constructor(x, y, length) {
    this.snakeColor = color(random(255, 255), random(0, 20), random(0, 20)); // Assign color here
    this.speed  = random(.5,2);
    this.snake = new Snake(x, y, length,this.snakeColor,this.speed); // The dragon contains a snake
    if (length<9){
    this.clawSectionIndex=2;
    } else {
    this.clawSectionIndex = 3;
    }
    this.secondClaws = int(length*2/3);
    this.length=length;
}

move() {
    this.snake.move();
}

display() {
    //console.log(Dragon.length);
    this.drawHorn(this.snake.segments[0].x-70, this.snake.segments[0].y - 60,13, false, 1, this.snakeColor);
    this.drawHorn(this.snake.segments[0].x-67, this.snake.segments[0].y - 60,15, false, 1, this.snakeColor);
    this.drawHorn(this.snake.segments[0].x+2, this.snake.segments[0].y - 41, 17, true, 1, this.snakeColor);
    //this.drawClaw(this.snake.segments[0].x-10,this.snake.segments[3].y-15);
    // Ensure the claw is within the bounds of the segments array
    const tailIndex = this.snake.segments[this.length-1];
    
    if (this.clawSectionIndex < this.snake.segments.length) {
        const clawSegment = this.snake.segments[this.clawSectionIndex];
        const secondSegment = this.snake.segments[this.secondClaws];
        this.drawClaw(clawSegment.x-24, clawSegment.y,this.snakeColor,false);
        this.drawClaw(clawSegment.x+8, clawSegment.y+2,this.snakeColor,true);
        this.drawClaw(secondSegment.x-24, secondSegment.y,this.snakeColor,false);
        this.drawClaw(secondSegment.x+8, secondSegment.y+2,this.snakeColor,true);
        this.drawWhisker(this.snake.segments[0].x+60, this.snake.segments[0].y-9 , 'red',radians(145),.75,false,2);
        this.drawWhisker(this.snake.segments[0].x-52, this.snake.segments[0].y-9 , 'red',radians(215),.75,true,2);
        
    }
    
    
    this.snake.display(); // Display the snake, which also includes the head
    this.drawTail(700,250,'darkblue');
     
    //let scaleFactor = 4;
    //let smallListSize=this.segments[0].length; // find inner list size
    //let beginShrink = smallListSize/4; //find segment to size down
   /* 
    for (let i = this.segments.length - 1; i >= 0; i--) {
        
            if (i<5){
                scale(scaleFactor)
                this.segments[i].display();
                scaleFactor = scaleFactor-.15;
            }
    }*/
}

drawClaw(x, y, color,flip=false) {
    
    noStroke();
    fill(color);
    // Main claw body

    if (flip){
    ellipse(x + 20, y, 8, 20); 
    // Draw the connecting arm
    push();
    translate(x + 7, y - 8); // Position relative to the claw's base
    rotate(radians(32)); // Slight tilt
    rect(-5, 4, 24, 4); // Arm
    pop();

    // Draw the arm muscle
    push();
    translate(x + 9, y); // Position relative to the claw's base
    rotate(radians(-65)); // Tilted muscle
    ellipse(0, 0, 6, 16); // Muscle
    pop();

    // Draw the claws
    fill('gold');
    // Left claw (rotated -15 degrees)
    push();
    translate(x + 17, y - 5); // Position relative to the claw's base
    rotate(radians(-15)); // Rotate counterclockwise
    triangle(-1, 1, 1, -1, 1, -7); // Left claw
    pop();

    // Middle claw (unchanged)
    triangle(x + 18, y - 7, x + 20, y - 8, x + 19, y - 16);

    // Right claw (rotated +10 degrees)
    push();
    translate(x + 22, y -7); // Position relative to the claw's base
    rotate(radians(10)); // Rotate clockwise
    triangle(-2, -2, 0, 2, -1, -7); // Right claw
    pop();

    // Add arcs on top of the claw body
    fill('orange');
    // Arc positions calculated relative to the ellipse
    arc(x + 19, y - 1, 6, 5, radians(270), radians(90)); // Top-left arc
    arc(x + 19, y + 4, 6, 5, radians(270), radians(90)); // Bottom-left arc

    fill(color);
    // Slightly larger arcs for another layer
    arc(x + 19, y - 1, 4, 4, radians(270), radians(90)); // Top-right arc
    arc(x + 19, y + 4, 4, 3, radians(270), radians(90)); // Bottom-right arc


    }
    else { 
    ellipse(x, y, 8, 20); 
    // Draw the connecting arm
    push();
    translate(x, y + 2); // Position relative to the claw's base
    rotate(radians(-20)); // Slight tilt
    rect(-5, 4, 24, 4); // Arm
    pop();

    // Draw the arm muscle
    push();
    translate(x + 12, y + 3); // Position relative to the claw's base
    rotate(radians(65)); // Tilted muscle
    ellipse(0, 0, 6, 16); // Muscle
    pop();

    // Draw the claws
    fill('orange');

    // Left claw (rotated -15 degrees)
    push();
    translate(x - 4, y - 5); // Position relative to the claw's base
    rotate(radians(-15)); // Rotate counterclockwise
    triangle(-1, 1, 1, -1, 1, -7); // Left claw
    pop();

    // Middle claw (unchanged)
    triangle(x - 1, y - 7, x + 1, y - 8, x, y - 16);

    // Right claw (rotated +10 degrees)
    push();
    translate(x + 4, y - 5); // Position relative to the claw's base
    rotate(radians(10)); // Rotate clockwise
    triangle(-2, -2, 0, 2, -1, -7); // Right claw
    pop();

    // Add arcs on top of the claw body
    fill('gold');
    // Arc positions calculated relative to the ellipse
    arc(x+2, y-1 , 6,5, radians(90), radians(270)); // Top-left arc
    arc(x+2, y+4, 6,5, radians(90), radians(270)); // Bottom-left arc

    fill(color);
    // Slightly larger arcs for another layer
    arc(x + 2, y-1,4,4, radians(90), radians(270)); // Top-right arc
    arc(x + 2, y + 4, 4,3, radians(90), radians(270)); // Bottom-right arc
    }
    
}

drawWhisker(x, y, strokeColor, rotation, scaleFactor, flip = false, strokeWidth = 1) {
    let points = [27, 5, 29, 12, 29, 15, 25, 21.5, 24, 26, 26, 30.5, 30, 37, 31, 43, 30, 48, 26, 54, 23, 60, 22, 65, 23, 71, 25, 73, 29, 75, 31, 75];
    let thickpoints = [26, 30.5, 30, 37,31, 45, 30, 50, 26, 56, 23, 62, 22, 67, 23, 73, 25, 75, 29, 77, 31, 77];

    noFill();
    stroke(strokeColor);
    

    push();
    translate(x, y); // Move to the specified position
    rotate(rotation); // Apply rotation
    scale(scaleFactor); // Apply scaling

    // Apply flipping if enabled
    if (flip) {
    scale(-1, 1); // Flip horizontally
    }

    strokeWeight(strokeWidth*.8);
    // Draw the main shape
    beginShape();
    for (let i = points.length - 2; i >= 0; i -= 2) {
    curveVertex(points[i], points[i + 1]); // Use the original points
    }
    endShape();

    strokeWeight(strokeWidth); // Set stroke width
    
    beginShape();
    for (let i = thickpoints.length - 2; i >= 0; i -= 2) {
    curveVertex(thickpoints[i], thickpoints[i + 1]); // Use the thickpoints
    }
    endShape();

    pop();
}

drawHorn(x, y, angle, flip, scale, colorH) {
    let scaleFactor = 0.8 * scale; 

    let horn_pox = x - 10;
    let horn2_pox = x + 11;
    noFill();

    push();
    translate(horn_pox + 18, y + 4);
    if (flip) {
    this.drawCurly(-59, -8, angle-9.5, 0.75, true, colorH, 3); 
    } else {
    this.drawCurly(-3, 0, angle - 8, 0.75, false, colorH, 3);
    }
    pop();

    push();
    translate(horn2_pox,y  - 20);
    if (flip) {
    this.drawCurly(-47, 0, angle + 6, 1, true, colorH, 2.5); 
    } else {
    this.drawCurly(0, 0, angle + 5, 1, false, colorH, 2.5);
    }
    pop();
}

drawTail(x,y,color){
    

    noStroke();
    fill(color);
    ///order is bottom left, top left, top right, bottom right
    quad(  x+26,y+70,    x+20,y-20,         x+40,y-20,   x+34 ,y+70  );
    // bottom, right, left 
    triangle(x+30,y+100,    x+45,y+65,    x+15,y+65);
    arc(x+15, y+65, 15, 20, radians(180), radians(0));
    
    x+=30;
    fill('gold');
    triangle(x-5,y+20,    x-10,y-10,    x-3,y-10)

}

drawCurly(x, y, angle, scaleFactor = 2, flip = false, strokeColor, strokeWidth) {
    let points = [68, 45, 69, 52, 68, 55, 65, 61.5, 64, 66, 66, 70.5,
                70, 77, 71, 83, 71, 89];

    for (let i = 0; i < points.length; i++) {
    points[i] *= scaleFactor;
    }

    for (let i = 0; i < points.length; i += 2) {
    points[i] += x;
    points[i + 1] += y;
    }

    let rotatedPoints = [];
    for (let i = 0; i < points.length; i += 2) {
    let xPos = points[i];
    let yPos = points[i + 1];
    let rotatedX = xPos * cos(radians(angle)) - yPos * sin(radians(angle));
    let rotatedY = xPos * sin(radians(angle)) + yPos * cos(radians(angle));
    if (flip) rotatedX = -rotatedX; 
    rotatedPoints.push(rotatedX, rotatedY);
    }

    noFill();
    
    stroke(strokeColor);
    strokeWeight(strokeWidth);

    push();
    beginShape();
    for (let i = 0; i < rotatedPoints.length; i += 2) {
    curveVertex(rotatedPoints[i], rotatedPoints[i + 1]);
    }
    endShape();
    pop();
}


}

class Snake {
constructor(x, y, length,color,speed) {
    this.segments = [];
    this.speed=speed;
    this.color = color;

    let shrinksize=2;

    for (let i = 0; i < length; i++) {

        let ball = new Ball(x - i * 26, y+500, 21-shrinksize, this.color);

        if (i>length/2){
            shrinksize+=1
        }
        this.segments.push(ball); 
        
    }

    this.xSpeed = random(1, 4);
    this.ySpeed = random(-1, 2);
    this.zigzagAngle = 0; 
}

move() {
    this.zigzagAngle += 0.1;
    const dx = sin(this.zigzagAngle) * 2.2; // Zigzag horizontally
    const dy = -1.5; // Move upward

    // Move the head of the snake
    this.segments[0].x += dx;
    this.segments[0].y += dy-10;

    // Update the positions of the other segments to follow the head
    for (let i = 1; i < this.segments.length; i++) {
    const prev = this.segments[i - 1];
    const curr = this.segments[i];
    const angle = atan2(prev.y - curr.y, prev.x - curr.x);
    curr.x = prev.x - cos(angle) * 15;
    curr.y = prev.y - sin(angle) * 15;  
    }

    // Reset position if the snake moves off the top of the canvas
    if (this.segments[0].y < -30) {
    const newX = random(width);
    const newY = height + 30;
    for (let i = 0; i < this.segments.length; i++) {
        this.segments[i].x = newX - i * 15;
        this.segments[i].y = newY;
    }
    }
}

    display() {

    // Display each segment (one snake)
    for (let i = this.segments.length - 1; i >= 0; i--) {
        this.segments[i].display(); 
        
    }


        // Display the head
        head(this.segments[0].x, this.segments[0].y - 30, 10, this.color);
    }
}

function mousePressed() {
noLoop();  // Stops the draw loop (animation)
}

function head(x, y, rotation, color) {
fill(color);  

push();
translate(x, y);
rotate(radians(-10 + rotation));
ellipse(0, 0, 12, 30);
pop();

push();
translate(x + 5, y);
rotate(radians(10 + rotation));
ellipse(0, 0, 12, 30);
pop();

circle(x + 2, y - 6, 14);

ellipse(x - 3, y + 10, 18, 30); 


arc(x - 7, y+8, 26, 48, radians(280), radians(132));

arc(x + 15, y+8, 24, 47, radians(60), radians(258));

ellipse(x + 9, y + 11, 18, 30); 
}
