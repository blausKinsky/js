let inconsolata;
// function preload() {
//   andro = loadFont('assets/AndroclesOpti-Regular.otf');
// }

function preload(){
  inconsolata = loadFont('assets/Inconsolata.otf'); 

}
function setup() {
  createCanvas(500, 500, WEBGL);
  textFont(inconsolata);
  textSize(width / 3);
  textAlign(CENTER, CENTER);
}
function draw() {
  background(0, 100);
  let time = millis();
  rotateY(time / 500);
  // rotateX(time / 1000);
  // rotateZ(time / 1234);
  text('YES', 0, 0);
}