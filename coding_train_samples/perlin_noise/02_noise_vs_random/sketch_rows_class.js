
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

  // for (i = 0; i <numOfElements; i+1){
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
  // let newchange = 'tomato'; 
  text(words[0], x1, y1); 
  text(words[1], x2, y2); 
  text(words[2], x3, y3); 
  text(words[3], x4, y4); 
  text(words[4], x5, y5); 
  text(words[5], x6, y6); 

  // ellipse(x, y, 24, 24);
  currentSecond = second(); 
  // noloop(); 

  if (currentSecond%2 == 0){
  // if (currentSecond%2 == 0 && onOff == true){
    // for (j = 0; j<numOfElements; j+1){
    //   newchange[j] = changeText();
    //   text(newchange[j], x[i], y[i]);
    // }
    words[0] = changeText(); 
   
    words[1] = changeText(); 

    words[2] = changeText(); 
  
    words[3] = changeText(); 
    
    words[4] = changeText();
    words[5] = changeText();  
    text(words[0], x1, y1);
    text(words[1], x2, y2);
    text(words[2], x3, y3);
    text(words[3], x4, y4);
    text(words[4], x5, y5);
    text(words[5], x6, y6); 
  }

  // else{
  //   // onOff = !onOff; //why didn't this work? 

  //   // console.log(onOff); 
  // }



}

function changeText(){
  // let newWord = random(words); 
  let newWord = int(random()*words.length); 
  let word = words[newWord];
  console.log(newWord, word); 
  return word; 

}
