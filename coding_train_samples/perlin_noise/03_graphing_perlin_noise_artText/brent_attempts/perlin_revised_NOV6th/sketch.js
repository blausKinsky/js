let phr1 = ['field note', 'ants', 'termites, not ants', 'spikes', 'dreams of collapse', 'elastic waistlines', 'precipitous fall', 'a story unshared','desirelessness & moping','that upper lip thing']
let phr2 = ['placebos','pulses','pulsing', 'plagues', 'porches','personal "brand"','the stumbles', 'feeling stalked','clam sighting', 'love of stumbling','another vortex','feeling stalked']
let phr3 = ['salt mine', 'salt farm','salty taste','salty rhyme','quite salty', 'very salty','not enough salt','that salty thing']
let word1, word2, word3, trig1, trig2, trig3, firstX1, firstX2, firstX3, tDescent
var inc = 0.004;
var inc2 = 0.0042;
let inc3 = 0.00375; 
// var inc2 = 0.006;
// let inc3 = 0.0055; 
var start = 0;
var start2 = 30;
let start3 = 17;
let altY = 0
let altY2 = 0
let line1Offset = 30
let line2Offset = 40 
let pinkLine1Offset = 30
let secondX = 300;
let secondY = 0
let hasHit = false;
let hasStarted = false;
let hasStarted2 = false; 
let startSecond = false; 


function setup() {
  createCanvas(600, 600);
  frameRate(50)
  firstX1 = width -1
  firstX2 = width - 2
  textFont('georgia',[25])
  tDescent = textDescent()
  trig2 = random(100)+width/3
  word1 = random(phr1)
  word2 = random(phr2)
  word3 = random(phr3)
}

function draw() {
  background(50);
  
  var xoff = start;
  var xoff2 = start2; 
  let xoff3 = start3; 
  strokeWeight(3)

  for (var x = 0; x < width; x++) {

    if (!hasStarted && x == firstX1) {
      altY = y - line1Offset
      hasStarted = true
    }
    noFill();
    stroke(255,255,0);
    var y = noise(xoff) * height+80;
    point(x, y);
    xoff += inc;

    stroke(0,255,255);
    var y2 = noise(xoff2) * height+80;
    point(x,y2)
    xoff2 += inc2;

    stroke(255,0,255);
    var y3 = noise(xoff3)*height+80;
    point(x,y3)
    xoff3 += inc3

    let interval2 = int(random(width-100),width-1)
    if (firstX1<trig2 && !startSecond && x == interval2){
      secondX = interval2 
      secondY = y2 - line2Offset
      word2 = random(phr2)
      // console.log('secondX and secondY are ', secondX, secondY,word2)
      startSecond = true
      trig2 = random(100)+width/3
    }

    let randomInterval = int(random(width-100, width))
    if (firstX1 <= 0 && x == randomInterval){
        firstX1 = randomInterval
        altY = y - line1Offset
        word1 = random(phr1)
    }

    if (startSecond) {
      push()
      noStroke()
      fill(0,255,255)
      text(word2, secondX, secondY)
      pop()
      stroke(0, 255, 255)
      line(secondX + tDescent, secondY+line2Offset/5, secondX + 5,secondY+(line2Offset*.85))
    }

    //cyan text is being spawned at a locaiton that should be closer to width

    if (startSecond && secondX <= 0) {
      //turn off "no" when its X gets below 0
      startSecond = false
    }
      push()
      fill(255, 255, 0)
      noStroke()
      text(word1, firstX1, altY);
      pop()
      stroke(255, 255, 0)
      line(firstX1 + tDescent, altY, firstX1 + tDescent, altY+(line1Offset*.85))// the second two coordinates are where the line meets the noise curve



  }
  
  // console.log('startSecond is ', startSecond)
  firstX1--
  secondX--
  start += inc;
  start2 += inc2; 
  start3 += inc3
}
