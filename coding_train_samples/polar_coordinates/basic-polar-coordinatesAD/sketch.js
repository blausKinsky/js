// Polar Coordinates (Basic Polar Coordinates)
// The Nature of Code
// The Coding Train / Daniel Shiffman
// https://youtu.be/O5wjXoFrau4
// https://thecodingtrain.com/learning/nature-of-code/3.4-polar-coordinates.html

// Basic Polar Coordinates: https://editor.p5js.org/codingtrain/sketches/DHetsOfgz
// Spiral: https://editor.p5js.org/codingtrain/sketches/BnJ_4U4cr
// Random Trail: https://editor.p5js.org/codingtrain/sketches/WqK-qD1vU
// Circular Shape: https://editor.p5js.org/codingtrain/sketches/s10TQXDZv

let angle = 0;
let r = 150;

function setup() {
  createCanvas(400, 400);
  background(0); //(0, 10) opacity of the background relative to current color range (default is 0-255) (Optional) 

}

function draw() {

  // stroke(255);
  // strokeWeight(4);
  // noFill();
  translate(200, 200);
  // let r = 150;
  // circle(0, 0, r * 2);

  strokeWeight(2);
  stroke(252, 238, 33);
  // r = r + random(-5, 5);
  let x = (r * cos(angle))+ random(-10, 10);
  let y = r * sin(angle)+ random(-10, 10);

  let rnd = random(); 
  if(rnd<.07){
    point(x, y);
  }
  

  angle += 0.01;
  r -= .02; 

  // if(angle>TWO_PI){
  //   noLoop();
  // }
  
  // let v = isLooping();
  // console.log(v);


  if(!isLooping()){
    console.log("stopped")
    }
  // console.log(r, angle);
}
