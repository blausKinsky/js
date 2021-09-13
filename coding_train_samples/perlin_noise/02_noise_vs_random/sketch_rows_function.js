//can i use for loops to declare global variables?
let inc = 0.011; //the speed of the movement
let words = ['max', 'min', 'fat', 'thin', 'one', 'two', 'zero', 'yes', 'no']; 
let newchange = [];
let numOfElements = 6; 
let xoff = [0, 5000, 10000,13500, 15000, 2500]; 
let x = []; 
let y =[60,120,180,240,300,360];
let yoff = 60; 
let ydist = 60; 
let [x1, x2, x3, x4, x5, x6] = [0, 0, 0,0,0,0];
let [y1, y2, y3, y4, y5, y6] = [1, 1, 1, 1, 1, 1]; 

let hasHit = false; 
let lastChange = 0; 
let [one, two, three, four, five,six] = [0,1,2,3,4,5];
let currentSecond = 0; 
let zz = 0;

function setup() {
  createCanvas(400, 400);
  frameRate(60);
  text(words[one], width/2, y[0]);
  text(words[two], width/2, y[1]);
  text(words[three], width/2, y[2]);
  text(words[four], width/2, y[3]);
  text(words[five], width/2, y[4]);
  text(words[six], width/2, y[5]); 

  }

function draw() {
  background(51);
  fill(255);
  textSize(24);
  for (i =0; i<numOfElements; i++){
    xoff[i] += inc;
    // xoff[i] = xoff[i] + (.009 + (i*1.05));
    // console.log('xoffi is ', xoff[i], i);
    x[i] = map(noise(xoff[i]), 0, 1, 0, width);

    zz = int(random()*words.length);
    // text(words[i], x[i], y[i]);

    currentSecond = second(); 
    // console.log(currentSecond); 

    if (currentSecond%2 == 0 && !hasHit){
      //the condition is hitting but, changing back very quickly, how can I make it stay unchanged for two seconds? 
      console.log('yes ',hasHit, zz); 

      if (i == 0){
        one = int(random()*words.length);
        x1 = x[i]; 
        y1 = y[i]; 
        // console.log('one is ', one, words[one]);
        // text(words[one], x[i], y[i]);
        // hasHit = true; 
        // lastChange = currentSecond;
      }   

      if (i == 1){
        two = int(random()*words.length);
        x2 = x[i]; 
        y2 = y[i];
        console.log(x[i], y[i]); 
        // text(words[two], x[i], y[i]);
        // hasHit = true; 
        // lastChange = currentSecond;
      }  

      // if (i == 2){
      //   three = int(random()*words.length);
      //   text(words[three], x[i], y[i]);
      //   hasHit = true; 
      //   lastChange = currentSecond;
      // }  

      // if (i == 3){
      //   four = int(random()*words.length);
      //   text(words[four], x[i], y[i]);
      //   hasHit = true; 
      //   lastChange = currentSecond;
      // }  

      // if (i == 4){
      //   five = int(random()*words.length);
      //   text(words[five], x[i], y[i]);
      //   hasHit = true; 
      //   lastChange = currentSecond;
      // }  

      // if (i == 5){
      //   six = int(random()*words.length);
      //   text(words[six], x[i], y[i]);
      //   hasHit = true; 
      //   lastChange = currentSecond;
      // }        
      

      // text(words[0], x[i], y[i]);
      // zz = int(random()*words.length);
      // text(words[zz], x[i], y[i]);



      hasHit = true; 
      lastChange = currentSecond; 

      } 
      // text(words[int(random()*words.length)], x[i], y[i]); 
      // text(words[i], x[i],y[i]);  

      text(words[one], x[i], y[i]);
      text(words[two], x[i], y[i]);

  }
  // console.log('the current second and last change are ', currentSecond, lastChange);
      if (currentSecond>lastChange){
        // text(words[i], x[i],y[i]); 
        hasHit = false; 
        // console.log('we are in the second condition and hasHit is ', hasHit); 
      }

      // text(words[i], x[i],y[i]); 

      // zz = int(random()*words.length);
      // text(words[zz], x[i], y[i]);

  }






 
  

 







