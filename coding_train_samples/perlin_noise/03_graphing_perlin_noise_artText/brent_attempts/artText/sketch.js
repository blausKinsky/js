// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/y7sgcFhk6ZM

let inc = 0.01;
let start = 0;
let dep = 300;
let altX = 300;
let altY = 0
hasHit = false;
lastChange = 0;


function setup() {
  createCanvas(400, 400);
  frameRate(10);
}

function draw() {
  background(51);
  stroke(255);
  noFill();
  beginShape();
  var xoff = start;
  currentSecond = second();
  console.log('altX: ', altX)

  for (var x = 0; x < width; x++) {

    stroke(255);
    var y = noise(xoff) * height;
    vertex(x, y);

    xoff += inc;
    // store these variables for when we swap location
    if (x == 100) {
      switchOne = y - 20
    }
    if (x == 300) {
      switchTwo = y -20
    }

    if (currentSecond%4 == 0 && !hasHit){
        onThree();
        hasHit = true;
        lastChange = currentSecond;
       // dep = 0;
        console.log('in the condtional statement ', hasHit, lastChange);
    }
    if (currentSecond > lastChange && hasHit){
        hasHit = false;
        if (altX == 300) {
          altX = 100
          altY = switchOne
        } else {
          altX = 300
          altY = switchTwo
        }
      }
    //keep updating the Y while we're displaying the text
    if (x == altX) {
      altY = y - 20
    }

      text('yes', altX, altY);
    //this is creating that weird space - we're drawing yes over and over
    }
  endShape();

  start += inc;
}

function onThree(){
  // console.log('the third second was reached ', currentSecond, hasHit, lastChange);
  // line(x, y, x+10, y - 10);
  // var yDist = floor(random(10, 40));
  // return yDist;

}




