// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/YcdldZ1E9gU

var xoff = 0;
var yoff = 0; 
let inc = 0.01;
let inc2 = 0.01; 
let words = ['max', 'min', 'fat', 'thin', 'one', 'two', 'zero', 'yes', 'no']; 
let newchange = 'love';
// inc2 = inc2*.01;


function setup() {
  createCanvas(400, 400);
  inc2 = random()*inc2; 
  // print(inc2); 
}

function draw() {
  background(51);
  xoff += inc;
  yoff -= inc2;
  // print(yoff); 

  //var x = random(width);
  var x = map(noise(xoff), 0, 1, 0, width);
  var y = map(noise(yoff), 0, 1, 0, height); 
  fill(255);
  textSize(24); 
  text(newchange, x, y);
  // ellipse(x, y, 24, 24);

  if (yoff < 0 || yoff > height){
  	inc2 = inc2 * -1;
  }
  // print(x, y, xoff, yoff); 
  currentSecond = second(); 
  print(currentSecond);

  if (currentSecond%2 == 0){
    print('we are here'); 
    newchange = changeText(); 
    text(newchange, x, y);

  }


}

function changeText(){
  let newWord = int(random()*words.length); 
  // let newWord = random(words.length);
  let word = words[newWord];
  return word; 

}
