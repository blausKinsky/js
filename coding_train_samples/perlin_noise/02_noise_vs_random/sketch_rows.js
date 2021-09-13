// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/YcdldZ1E9gU

var xoff1 = 0;
var xoff2 = 10000;
let xoff3 = 20000;  
let inc = 0.01; //the speed of the movement
let words = ['max', 'min', 'fat', 'thin', 'one', 'two', 'zero', 'yes', 'no']; 
let newchangeM = 'love';
let newchangeH = 'sugar';
let newchangeL = 'spicy'


function setup() {
  createCanvas(400, 400);

}

function draw() {
  background(51);
  xoff1 += inc;
  xoff2 += 0.0095; 
  xoff3 += 0.0090; 

  let xH = map(noise(xoff1), 0, 1, 0, width);
  let xM = map(noise(xoff2), 0, 1, 0, width);
  let xL = map(noise(xoff3), 0, 1, 0, width);
  var yHigh = height/3; 
  var yMid = height/2; 
  var yLow = (2 * height/3); 

  fill(255);
  textSize(24); 
  text(newchangeH, xH, yHigh);
  text(newchangeM, xM, yMid);
  text(newchangeL, xL, yLow);
  // ellipse(x, y, 24, 24);


  // print(x, y, xoff, yoff); 
  currentSecond = second(); 
  // print(currentSecond);

  if (currentSecond%2 == 0){
    // print('we are here'); 
    //how to make it pick just once, we were going to do this with a boolean
    newchangeH = changeText(); 
    newchangeM = changeText(); 
    newchangeL = changeText(); 
      text(newchangeH, xH, yHigh);
      text(newchangeM, xM, yMid);
      text(newchangeL, xL, yLow);

  }


}

function changeText(){
  let newWord = int(random()*words.length); 
  let word = words[newWord];
  return word; 

}
