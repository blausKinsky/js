let slightOffset = 5
let centerX
let centerY
let sideX
let sideY 

function setup() {
	createCanvas(windowWidth, windowHeight);
  centerX = width/10;
  centerY = 2*height/3; 
  sideY = height/4  
  sideX = 3.56514*width/10
  // sideX = sideY

  console.log(sideX, sideY,sideX-centerX,centerY-sideY)
  background(0);
}

function draw(){
  strokeWeight(1)
  stroke(200)
  line(centerX, centerY, sideX, centerY)
  line(centerX, centerY, centerX, sideY)

  line(5*centerX, centerY, 5*centerX+(sideX-centerX), centerY)
  line(5*centerX, centerY, 5*centerX, sideY)
  console.log(5*centerX, centerY,5*centerX+(sideX-centerX),(5*centerX+(sideX-centerX))-5*centerX)
  // line(width/3, 2*height/3, 2*width/4, height/4+slightOffset)
  // fill(200)
  // textSize(20)
  // textFont('Courier New')
  // text('wicked problems',(1.3*width/3), 2*height/3 + 6*slightOffset)
  // translate(width/3,2*height/3)
  // angleMode(RADIANS)
  // push()
  // rotate(4.7)
  // text('not wicked',90, -10)
  // rotate(PI/8)
  // text('severe problem',100, -5)
  // pop()

  noLoop();
}
