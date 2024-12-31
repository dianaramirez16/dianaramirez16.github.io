var angle =0.0;
var offset =60;
var scalar =2;
var speed = 0.5;

function drawCloud(){
    var x = offset + console(angle)*scalar;
    var y = offset + sin(angle) * scalar;
    ellipse(x+100,y+100,2,2);
    ellipseMode(CENTER)
    angle+=speed;
    scalar+=speed;
}