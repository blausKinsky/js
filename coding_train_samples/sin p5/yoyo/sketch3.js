let angle = 0;
let angle2 = 0; 
let angleV = 0.05;//this stands for angle velocity or the speed that the angle changes in 
let angleV2 = 0.025;
let angle3 = 0;  
// let angleV3 = 0.01275; 
let angleV3 = 0.0333333333;


function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0, 30);
  translate(300, 200);

  let y = map(sin(angle), -1, 1, -200, 200);
  let y2 = map(sin(angle2), -1, 1, -200, 200); 
  let y3 = map(sin(angle3), -1, 1, -200, 200); 
  let x = map(sin(angle), -1, 1, -300, 300);
  let x2 = map(sin(angle2), -1, 1, -300, 300);
  let x3 = map(sin(angle3), -1, 1, -300, 300);
  // console.log(x);

  // if(x > -.001 && x<.001){
  //   console.log("x is 0");
  // }
  fill(252, 238, 33);
  stroke(252, 238, 33);
  strokeWeight(4);
  line(0, 0, 0, y);
  circle(0, y, 32);

  fill(33, 238, 238);
  stroke(33, 238,238); 
  strokeWeight(4); 
  line(0,0,x,0); 
  noStroke();
  circle(x, 0, 32);

  //magenta
  fill(238, 33, 238);
  stroke(238, 33, 238);
  strokeWeight(4); 
  line(0, 0, x2, y);
  noStroke(); 
  circle(x2,y,32);
    //green
  fill(33, 238, 33);
  stroke(33, 238, 33);
  strokeWeight(4); 
  line(0, 0, x, y2);
  noStroke(); 
  circle(x,y2,32);

  // //red
  fill(238, 33, 33);
  stroke(238, 33, 33);
  strokeWeight(4); 
  line(0, 0, x3, y);
  noStroke(); 
  circle(x3,y,32);
  // textSize(34);
  // text('yes', y, x);

  //blue 
  fill(33, 33, 238);
  stroke(33, 33, 238);
  strokeWeight(4); 
  line(0, 0, x3, y2);
  noStroke(); 
  circle(x3,y2,32);




  angle += angleV;
  angle2 += angleV2;
  angle3 += angleV3;

  // if(angle/TWO_PI === 0){
  //   console.log('angle restart');

  // }
  // console.log(angle, angle2); 
}
