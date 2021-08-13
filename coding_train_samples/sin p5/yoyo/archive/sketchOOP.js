let angle =0;
let angleV = 0.025; //this stands for angle velocity or the speed that the angle changes in 
let aCycle = 0;  
let offset = 0.000005;
let textArray = ['musk', 'maneuver', 'makeup', 'manhandle'];
let yWord =textArray[0]; 
let y = 0; 

function setup() {
  createCanvas(600, 400);
  
  pen = new Pendulum(angle, angleV);
  // frameRate(60);
}
function draw() {
  background(0);
  translate(300, 200);// could this go in the setup? 
  // angle += angleV;
  // aCycle = angle%TWO_PI; 
  // console.log(angle, aCycle);
  
  // console.log('draw ', angle, angleV);
  // aCycle = angle%TWO_PI; 
  pen.display();
  // yWord = textArray[1];
  // angle += angleV;
}

class Pendulum{
  constructor(angle, angleV){
    // this.y = y;
    // this.angleV = angleV;
    // this.word = word; 
    this.angle = angle; 
    this.angleV = angleV; 
    console.log('in the constructor', this.angle, this.angleV);
    
  }
  // move(){
  //   this.y = map(sin(this.angle), -1, 1, -200, 200); 
  //   this.x = map(sin(this.angle), -1, 1, -300, 300);
  // }
  display(){
    this.angle += this.angleV;
    // this.y = map(sin(this.angle), -1, 1, -200, 200); 
    let y = map(sin(this.angle), -1, 1, -200, 200);
    console.log('y is ', y);
    fill(238, 38, 38); 
    // fill(int(random(255)), int(random(255)), int(random(255)));
    noStroke();
    textSize(34);
    text('maintenance', 0, y);
  }
}





