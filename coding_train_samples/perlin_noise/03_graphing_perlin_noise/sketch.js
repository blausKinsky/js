// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/y7sgcFhk6ZM

var inc = 0.01;
var start = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(51);
  stroke(255);
  noFill();
  beginShape();
  var xoff = start;
  for (var x = 0; x < width; x++) {
    stroke(255);
    // var n = map(noise(xoff), 0, 1, 0, height);
    // var s = map(sin(xoff), -1, 1, -50, 50);
    // var y = s + n;

    //var y = random(height);
    //this was the first example of him using the sin
    // var y = height/2 + sin(xoff) * height/2;
    var y = noise(xoff) * height;
    vertex(x, y);
    console.log('the x and y in the forloop vertex are ', x, y)

    xoff += inc;
    console.log('the xoff in the for loop is ', xoff)
  }
  endShape();

  start += inc;
  console.log('the start at the end of the draw is ', start)
}
