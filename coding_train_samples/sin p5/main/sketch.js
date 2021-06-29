// Simple Harmonic Motion (Main)
// The Nature of Code
// The Coding Train / Daniel Shiffman
// https://youtu.be/oXwCVDXS2Lg
// https://thecodingtrain.com/learning/nature-of-code/3.3-angles-and-vectors.html

// Basic: https://editor.p5js.org/codingtrain/sketches/Fn1feR81W
// Approximate Time: https://editor.p5js.org/codingtrain/sketches/uGCYH4-PN
// Exact Time Exercise: https://editor.p5js.org/codingtrain/sketches/jp2B-0Wkg
// Main: https://editor.p5js.org/codingtrain/sketches/MfvyVULHT
// Yoyo: https://editor.p5js.org/codingtrain/sketches/qBhVjZ0pn
// 2-axes Exercise: https://editor.p5js.org/codingtrain/sketches/_ir7-suNG

let angle = 0;
let angleV = 0;//the angle velocity or the amount the angle changes

function setup() {
  createCanvas(400, 400);
  // frameRate(2);
}

function draw() {
  background(0);
  translate(200, 200);
  fill(252, 238, 33);
  let r = map(sin(angle), -1, 1, 0, 200);
  circle(0, 0, r * 2);

  // let increment = TWO_PI / 60;
  angle += angleV; //the angle keeps accumulating by the amount of angleV
  // angle += increment;
  angleV += 0.0001; //this will speed up over time (why? because the velocity is constantly increasing)
  // console.log('angleV', angleV, 'angle', angle);
  // console.log(increment);
  // console.log(frameRate());
}
