// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/y7sgcFhk6ZM

var inc = 0.005;
var inc2 = 0.006;
var start = 0;
var start2 = 30

function setup() {
  createCanvas(400, 400);
  frameRate(30)
}

function draw() {
  background(51);
  stroke(255);
  noFill();
  // beginShape();
  var xoff = start;
  var xoff2 = start2; 
  for (var x = 0; x < width; x++) {
    strokeWeight(3)
    stroke(255,255,0);
    var y = noise(xoff) * height;
    point(x, y);
    xoff += inc;

    stroke(0,255,255);
    var y2 = noise(xoff2) * height;
    point(x,y2)
    xoff2 += inc2;

  }
  

  start += inc;
  start2 += inc2; 
}
