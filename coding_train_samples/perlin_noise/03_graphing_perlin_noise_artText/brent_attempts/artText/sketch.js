// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/y7sgcFhk6ZM

let inc = 0.01;
let start = 0;
let dep = 300;
let altX = 399;
let altY = 0
let secondX = 300;
let secondY = 0
hasHit = false;
lastChange = 0;
let hasStarted = false;
let startSecond = false;
//for doing timer stuff
let timerX = 300

function setup() {
  createCanvas(400, 400);
  frameRate(30);
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
    if (!hasStarted && x == altX) {
      altY = y - 30
      hasStarted = true
    }
    stroke(255);
    var y = noise(xoff) * height;
    vertex(x, y);

    xoff += inc;
    // store these variables for when we swap location

    // get y position for some X
    if (x == timerX) {
      let timerY = y
    }
    if (currentSecond%4 == 0 && !hasHit){
        onThree();
        hasHit = true;
        lastChange = currentSecond;
       // dep = 0;
        console.log('in the condtional statement ', hasHit, lastChange);
      // spawn new text using timerY and timerX
    }
    // experiment with boundaries of where they can spawn - e.g. if altX is between 100 and 200, make sure secondX is between 300 & 400
      let interval2 = int(random(300, 399))
    // spawning "no"/secondX when "yes" gets below 100 x position
    if (altX < 100 && !startSecond && x == interval2) {
      secondX = interval2
      secondY = y - 30
      //use boolean to make sure only one of these spawns at a time
      startSecond = true
    }
    // respawning "yes"/altX when it gets below 0
    let randomInterval = int(random(300, 400))
    if (altX <= 0 && x == randomInterval){
        altX = randomInterval
        altY = y - 30
    }

    if (startSecond) {
      text('no', secondX, secondY)
    }
    if (startSecond && secondX <= 0) {
      //turn off "no" when its X gets below 0
      startSecond = false
    }

      text('yes', altX, altY);
      line(altX + 5, altY+10, altX + 5, altY+20)
    //this is creating that weird space - we're drawing yes over and over
    }
  endShape();
  altX--;
  secondX--

  start += inc;
}

function onThree(){
  // console.log('the third second was reached ', currentSecond, hasHit, lastChange);
  // line(x, y, x+10, y - 10);
  // var yDist = floor(random(10, 40));
  // return yDist;

}




