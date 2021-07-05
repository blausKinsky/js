// let angle = 0;
// let angle2 = 0; 
// let angle3 = 0;  
// let angleV = 0.05;//this stands for angle velocity or the speed that the angle changes in 
// let angleV2 = 0.025;
// let angleV3 = 0.0333333333;
let hasHit = false; 
let cDiam = 32; 
let xAngle = 0;
let yAngle = 0; 
let yoyo = []; 
// let yel = (252, 238, 33);
// let cyn = (33, 238, 238);
// let mag = (238, 33, 238);
// let red = (238, 33, 33);
// let blu = (33, 33, 238);
// let grn = (238, 33, 33);

let cArray = [(252, 238, 33), (33, 238, 238), (238, 33, 238),(238, 33, 33), (33, 33, 238),(238, 33, 33)];
let aVelArray = [0.05, 0.025, 0.03333333333, 0.01275]; 

function setup() {
  createCanvas(600, 400);
  // frameRate(20);
  for(let i=0;i<6;i++){
      yoyo[i] = new Pendulum(xAngle,yAngle,randomChoice(aVelArray), randomChoice(cArray));
  }
}

function draw() {
  background(0, 30);
  translate(300, 200);
  // c = randomChoice(cArray);
  // angleV = randomChoice(aVelArray); 



}

function randomChoice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}


class Pendulum{
  constructor(xAngle, yAngle, angleV, c){
    this.xAngle = xAngle;
    this.yAngle = yAngle; 
    this.angleV = angleV; 
    this.c = c;
    // this.path = path; 
  }

  calc_angle(){
    let xCrdn = map(sine(this.xAngle), -1,1,-300,300);
    let yCrdn = map(sine(this.yAngle), -1,1,-200,200);
  }

  display(){
    fill(this.c);
    circle(xCrdn, yCrdn, cDiam);
    stroke(this.c); 
    strokeWeight(4); 
    line(0, 0, xCrdn, yCrdn); 
  }

  chngA(){
    this.xAngle += this.angleV; 
    this.yAngle += this.angleV; 
  }
}




//this was in the original draw()
  // let y = map(sin(angle), -1, 1, -200, 200);
  // let y2 = map(sin(angle2), -1, 1, -200, 200); 
  // let y3 = map(sin(angle3), -1, 1, -200, 200); 
  // let x = map(sin(angle), -1, 1, -300, 300);
  // let x2 = map(sin(angle2), -1, 1, -300, 300);
  // let x3 = map(sin(angle3), -1, 1, -300, 300);
  // console.log(x);

  // if (hasHit == true && x < -17 && x > 5){
  //     hasHit = false;
  // }
  // if (!hasHit && x > -17 && x < 5) {
  //     console.log("x is 0");
  //     changeText();
  //     hasHit = true; 
  // }
  // if(x > -17 && x < 5){
  //   console.log("x is 0");
  // }

  // //yellow
  // fill(252, 238, 33);
  // stroke(252, 238, 33);
  // strokeWeight(4);
  // line(0, 0, 0, y);
  // circle(0, y, 32);
  // //cyan
  // fill(33, 238, 238);
  // stroke(33, 238,238); 
  // strokeWeight(4); 
  // line(0,0,x,0); 
  // noStroke();
  // circle(x, 0, 32);
  // //magenta
  // fill(238, 33, 238);
  // stroke(238, 33, 238);
  // strokeWeight(4); 
  // line(0, 0, x2, y);
  // noStroke(); 
  // circle(x2,y,32);
  // //green
  // fill(33, 238, 33);
  // stroke(33, 238, 33);
  // strokeWeight(4); 
  // line(0, 0, x, y2);
  // noStroke(); 
  // circle(x,y2,32);
  // // //red
  // fill(238, 33, 33);
  // stroke(238, 33, 33);
  // strokeWeight(4); 
  // line(0, 0, x3, y);
  // noStroke(); 
  // circle(x3,y,32);
  // // textSize(34);
  // // text('yes', y, x);

  // //blue 
  // fill(33, 33, 238);
  // stroke(33, 33, 238);
  // strokeWeight(4); 
  // line(0, 0, x3, y2);
  // noStroke(); 
  // circle(x3,y2,32);

  // angle += angleV;
  // angle2 += angleV2;
  // angle3 += angleV3;


// }
