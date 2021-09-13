
//can i use for loops to declare global variables?
let xoff1 = 0;
let xoff2 = 10000;
let xoff3 = 20000; 
let xoff4 = 50000;  
let xoff5 = 75000;  
let xoff6 = 30000;   
let inc = 0.01; //the speed of the movement
let words = ['max', 'min', 'fat', 'thin', 'one', 'two', 'zero', 'yes', 'no']; 
let newchange = [];
let numOfElements = 6; 
// let xoff = []; 
// let x = []; 
// let y = []; 
let yoff = 60; 
let ydist = 60; 
let [y1, y2, y3, y4, y5, y6] =[0,0,0,0,0,0,];
// let onOff = false; 
let [x1,x2,x3,x4,x5,x6] = [0,0,0,0,0,0,];
let hasHit = false; 
let lastChange = 0; 
let [one, two, three, four, five,six] = [0,1,2,3,4,5];


function setup() {
  createCanvas(400, 400);
  frameRate(30);

  }


function draw() {
  background(51);
  fill(255);
  textSize(24);
  xoff1 += 0.01;
  xoff2 += 0.0095; 
  xoff3 += 0.0090; 
  xoff4 += 0.0097;
  xoff5 += 0.0093; 
  xoff6 += 0.0091;

  //make sure you += increment the i in the for loop or it will create an infinite loop
  // for (i = 0; i <numOfElements; i++){
  //   x[i] = map(noise(xoff[i]), 0, 1, 0, width);

  // }
  x1 = map(noise(xoff1), 0, 1, 0, width);
  x2 = map(noise(xoff2), 0, 1, 0, width);
  x3 = map(noise(xoff3), 0, 1, 0, width);
  x4 = map(noise(xoff1), 0, 1, 0, width);
  x5 = map(noise(xoff2), 0, 1, 0, width);
  x6 = map(noise(xoff3), 0, 1, 0, width);

  y1 = yoff; 
  y2 = yoff + ydist; 
  y3 = yoff + 2*ydist; 
  y4 = yoff + 3*ydist; 
  y5 = yoff + 4*ydist; 
  y6 = yoff + 5*ydist; 
//when a for loop blows up everything

  text(words[one], x1, y1); 
  text(words[two], x2, y2); 
  text(words[three], x3, y3); 
  text(words[four], x4, y4); 
  text(words[five], x5, y5); 
  text(words[six], x6, y6); 

  // ellipse(x, y, 24, 24);
  currentSecond = second(); 
  milliSecond = millis();
  // noloop(); 

  if (currentSecond%2 == 0 && !hasHit){

    one = int(random()*words.length);
    two = int(random()*words.length);
    three = int(random()*words.length);
    four = int(random()*words.length);
    five = int(random()*words.length);
    six = int(random()*words.length);

    text(words[one], x1, y1);
    text(words[two], x2, y2);
    text(words[three], x3, y3);
    text(words[four], x4, y4);
    text(words[five], x5, y5);
    text(words[six], x6, y6); 
    hasHit = true; 
    lastChange = currentSecond; 
  }

  if (currentSecond>lastChange){
    hasHit = false; 
  }

}

function changeText(){
  // let newWord = random(words); 
  let newWord = int(random()*words.length); 
  let word = words[newWord];
  console.log(newWord, word); 
  return word; 

}
