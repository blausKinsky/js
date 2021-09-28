// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/y7sgcFhk6ZM

let inc = 0.01;
let start = 0;
let dep = 300;
let drawX = 0;
let drawY = 0;
let yArray = []
let xArray = []
console.log('now im here')

function setup() {
  createCanvas(400, 400);
  frameRate(10);
}

function draw() {
  console.log('drawY is ', drawY);
  background(51);
  stroke(255);
  noFill();
  beginShape();
  var xoff = start;
  for (var x = 0; x < width; x++) {
    stroke(255);
    var y = noise(xoff) * height;
    yInt = floor(y)
    yArray.push(yInt)
    xArray.push(x)
    console.log(yArray)
    //store these Ys
    vertex(x, y);
    // if (x == drawX) {
    //   drawY = y
    // }

    text('yes', xArray[drawX], yArray[drawY])
    // text('yes', drawX, yArray[drawY])
    console.log(xArray[drawX],yArray[drawY], 'the x is ', x)
    
    if (drawX >399){
      drawX = -1;
      drawY = -1;
      xArray = []
      yArray = []


    }
    // if (drawX <= 0) {
    //     // drawX = 399
    //     xArray = []
    //     yArray = []
    //     // yArray.length = 0;
    //     xArray.push(400)
    //     yArray.push(0)
    //     drawY = -1
    //   }

    xoff += inc;
    drawX += 1; 
    // drawX -= 1;
    drawY += 1; 
  }
endShape();
start += inc;

}

  // console.log('current second: ', currentSecond)
  //   if (currentSecond%4 == 0){
  //       drawX = altX;
  //     console.log('drawX, drawY', drawX, drawY)
  //       onThree();
  //       hasHit = true;
  //       lastChange = currentSecond;
  //      // dep = 0;
  //   }



// function onThree(){
//   // console.log('the third second was reached ', currentSecond, hasHit, lastChange);
//   // line(x, y, x+10, y - 10);
//   // var yDist = floor(random(10, 40));
//   // return yDist;

// }




