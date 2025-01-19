
function setup() {
    const canvas = createCanvas(1000, 490);
    pixelDensity(2);
    canvas.parent('myVolcanoCanvas');

    background(255, 245, 235);
    
    // Create multiple dragons
    let l = getOddLength();
    // for (let i = 0; i < l; i++) {
    //     dragons.push(new Dragon(random(width), random(height), l));
    //     l = getOddLength();
    // }

    // // Create multiple clouds and associated rolls
    // for (let i = 0; i < 10; i++) {
    //     let x;
    //     if (random() < 0.5) {
    //         // 50% chance for x to be in range 0-100
    //         x = random(0, 100);
    //     } else {
    //         // 50% chance for x to be in range 500-600
    //         x = random(800,1000);
    //     }
    //     let y = random(height);   //save the random variables then reuse for rolls
    //     clouds.push(new Cloud(x, y));
        
    // }


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

    
    fill('darkgrey')
    //draw background hills and skyscape
  
    arc(400, 500, 800, 300, radians(180), radians(360));
    arc(200, 500, 580, 600, radians(180), radians(360));
    arc(240, 500, 660, 200, radians(180), radians(360));
    arc(170, 500, 300, 500, radians(180), radians(360));
    
    arc(800, 500, 20, 300, radians(180), radians(360));
    arc(600, 500, 180, 600, radians(180), radians(360));
    arc(640, 500, 160, 200, radians(180), radians(360));
    arc(570, 500, 100, 500, radians(180), radians(360));
    

    // Update and display each dragon
    /*for (let dragon of dragons) {
        dragon.move();
        dragon.display();
    }
*/                 
    
   
}