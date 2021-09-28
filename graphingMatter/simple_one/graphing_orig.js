slightOffset = 5

function setup() {
	createCanvas(800,800);
  background(0);
}

function draw(){
  strokeWeight(1)
  stroke(200)
  line(width/3, 2*height/3, 3*width/4, 2*height/3)
  line(width/3, 2*height/3, width/3, height/4)
  line(width/3, 2*height/3, 2*width/4, height/4+slightOffset)
  fill(200)
  textSize(20)
  textFont('Courier New')
  text('wicked problems',(1.3*width/3), 2*height/3 + 6*slightOffset)
  translate(width/3,2*height/3)
  angleMode(RADIANS)
  push()
  rotate(4.7)
  text('not wicked',90, -10)
  rotate(PI/8)
  text('severe problem',100, -5)
  pop()

  noLoop();
}
