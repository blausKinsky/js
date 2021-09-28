// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/y7sgcFhk6ZM

let inc = 0.01;
let start = 0;
let dep = 300;
let altX = 399;
let altY = 0
let drawX = 399
let drawY = 0
hasHit = false;
lastChange = 0;


function setup() {
  createCanvas(400, 400);
  frameRate(10);
}

let yArray = []

function draw() {
  background(51);
  stroke(255);
  noFill();
  beginShape();
  var xoff = start;
  currentSecond = second();
  for (var x = 0; x < width; x++) {

    stroke(255);
    var y = noise(xoff) * height;
    yArray.push(y)
    //store these Ys
    vertex(x, y);
    if (x == drawX) {
      drawY = y
    }

    xoff += inc;
    // store these variables for when we swap location
    //
    text('yes', drawX, drawY)
   }

  console.log('current second: ', currentSecond)
    if (currentSecond%4 == 0){
        drawX = altX;
      console.log('drawX, drawY', drawX, drawY)
        onThree();
        hasHit = true;
        lastChange = currentSecond;
       // dep = 0;
    }


    if (altX <= 0) {
      altX = 399
    }

      altX--

  endShape();
  start += inc;
}

function onThree(){
  // console.log('the third second was reached ', currentSecond, hasHit, lastChange);
  // line(x, y, x+10, y - 10);
  // var yDist = floor(random(10, 40));
  // return yDist;

}




