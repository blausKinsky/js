// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/y7sgcFhk6ZM

let inc = 0.01;
let start = 0;
let dep = 300;
let altX = 300; 
hasHit = false; 
lastChange = 0; 


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

  for (var x = 0; x < width; x++) {

    stroke(255);
    var y = noise(xoff) * height;
    vertex(x, y);
     
    xoff += inc;

    if (currentSecond%4 == 0 && !hasHit){
        onThree(); 
        hasHit = true; 
        lastChange = currentSecond; 
        // dep = 0; 
        // altX = 300
        console.log('in the condtional statement ', hasHit, lastChange);
    }

    if (currentSecond > lastChange){
        // altX = altX+dep; 
        text('yes', altX, 30);
        hasHit = false; 

      }
      altX = altX - 1; 
      console.log(altX);
    }
  endShape();

  start += inc;
  if (altX < 0){
    altX = 300; 
  }
}

function onThree(){
  // console.log('the third second was reached ', currentSecond, hasHit, lastChange); 
  // line(x, y, x+10, y - 10); 
  // var yDist = floor(random(10, 40));
  // return yDist; 

}

    


