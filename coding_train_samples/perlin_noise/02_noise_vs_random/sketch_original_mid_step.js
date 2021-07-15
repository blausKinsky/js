// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/YcdldZ1E9gU

let xoff1 = 0;
let xoff2 = 10000; // we are picking another point on the graph, there is no thing as a y-offset
let inc = 0.01;// this controls the speed of the jitter

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(51);
  xoff1 += inc;
  xoff2 += inc

  var x = map(noise(xoff1), 0, 1, 0, width);
  var y = map(noise(xoff2), 0, 1, 0, height); 
  fill(255);
  ellipse(x, y, 24, 24);

}

//think of how you might be able to move the bell curve to favor the right or left