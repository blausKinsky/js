let myCircle;

function setup() {
  createCanvas(300, 300);

  myCircle = {x: 150, y: 100, size: 50};
}

function draw() {
  background(50);

  circle(myCircle.x, myCircle.y, myCircle.size);
}