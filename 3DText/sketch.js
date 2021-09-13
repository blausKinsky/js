let inconsolata;
// function preload() {
//   andro = loadFont('assets/AndroclesOpti-Regular.otf');
// }

function preload(){
  inconsolata = loadFont('assets/Inconsolata.otf'); 

}
function setup() {
  // createCanvas(1000, 1000, WEBGL);
  // perspective(width/2, height/2, 0.1, 2);
  createCanvas(windowWidth, windowHeight, WEBGL);
  // camera(width/2,height/2, 10); 
  // ortho(-width, width, height, -height/2, 20, 100);
  textFont(inconsolata);
  textSize(width / 15);
  textAlign(CENTER, CENTER);
}
function draw() {
  background(0, 100);
  let time = millis();
  rotateY(time / 500);
  // rotateX(time / 1000);
  // rotateZ(time / 1234);
  text('backspace', 0, 0);
}

/*
perspective(fovy, aspect, near, far)
ortho(left, right, bottom, top, near, far)
*/