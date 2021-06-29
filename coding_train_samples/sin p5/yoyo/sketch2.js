let angle = 0;
let angle2 = 0; 
let angleV = 0.05;//this stands for angle velocity or the speed that the angle changes in 
let angleV2 = 0.0333333333;
let angleV3 = 0.1275;  


function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0, 127);
  translate(300, 200);
  fill(252, 238, 33);
  stroke(252, 238, 33);
  let y = map(sin(angle), -1, 1, -200, 200);
  let x = map(sin(angle2), -1, 1, -300, 300);
  let y2 = map(cos(angleV3), -1, 1, -200, 200); 
  strokeWeight(4);
  line(0, 0, 0, y);
  circle(0, y, 32);

  fill(33, 238, 238);
  stroke(33, 238,238); 
  strokeWeight(4); 
  line(0,0,x,0); 
  noStroke();
  circle(x, 0, 32);

  fill(238, 33, 238);
  stroke(238, 33, 238);
  strokeWeight(4); 
  line(0, 0, x, y);
  noStroke(); 
  circle(x,y,32);

  fill(238, 33, 33);
  stroke(238, 33, 33);
  strokeWeight(4); 
  line(0, 0, x, x);
  noStroke(); 
  circle(x,x,32);
  // textSize(34);
  // text('yes', y, x);


  angle += angleV;
  angle2 += angleV2;
  console.log(angle, angle2); 
}
