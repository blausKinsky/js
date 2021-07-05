let angle =0;
let angleV = 0.025; //this stands for angle velocity or the speed that the angle changes in 
let aCycle = 0;  
let offset = 0.000005;
let textArray = ['musk', 'maneuver', 'makeup', 'manhandle'];
let yWord =textArray[0]; 
let y = 0; 

function setup() {
  createCanvas(600, 400);
  background(0, 127);
  pen = new Pendulum(angle, 'musk');
  // frameRate(60);
}
function draw() {
  translate(300, 200);// could this go in the setup? 
  angle += angleV;
  aCycle = angle%TWO_PI; 
  console.log(angle, aCycle);
  yWord = textArray[1];
  y = map(sin(angle), -1, 1, -200, 200);
  pen.display(y, yWord);
  angle += angleV;
}

class Pendulum{
  constructor(y, word){
    this.y = y;
    // this.angleV = angleV;
    this.word = word; 
  }
  // move(){
  //   this.y = map(sin(this.angle), -1, 1, -200, 200); 
  //   this.x = map(sin(this.angle), -1, 1, -300, 300);
  // }
  display(){
    // this.y = map(sin(this.angle), -1, 1, -200, 200); 
    fill(int(random(255)), int(random(255)), int(random(255)));
    noStroke();
    textSize(34);
    text(this.word, 0, this.y);
  }
}






