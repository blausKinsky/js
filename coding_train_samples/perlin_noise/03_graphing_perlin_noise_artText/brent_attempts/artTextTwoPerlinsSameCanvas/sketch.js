let phr1 = ['field note', 'ants', 'termites, not ants', 'spikes', 'dreams of collapse', 'elastic waistlines', 'precipitous fall', 'a story unshared','desirelessness & moping','that upper lip thing']
let phr2 = ['placebos','pulses','pulsing', 'plagues', 'porches','personal "brand"','the stumbles', 'feeling stalked','clam sighting', 'love of stumbling','another vortex','feeling stalked']
let phr3 = ['salt mine', 'salt farm','salty taste','salty rhyme','quite salty', 'very salty','not enough salt','that salty thing']
let phr4 = ['rubber','rug','race horse','racing','retiring','rhythming','reconsidering','resonating']
let word1, word2, word3, word2b, word1a
let inc = 0.01;
let inc2 = 0.015
let start = 0;
let start2 =0
let dep = 300;
let secTrig, firstX,firstX2, tDescent, secTrig2,startSecond2
let altY = 0
let altY2 = 0
let line1Offset = 30
let line2Offset = 40 
let line1Offset2 = 30
let line2Offset2 = 40 
let pinkLine1Offset = 30
let secondX = 300;
let secondY = 0;
let secondX2 = 300;
let secondY2 = 0
let hasHit = false;
let hasStarted = false;
let hasStarted2 = false; 
let startSecond = false;


function setup() {
  createCanvas(600, 600);
  frameRate(80);
  firstX = width -1
  firstX2 = width - 1
  firstXb = width -1
  firstX2b = width - 2
  textFont('georgia',[25])
  tDescent = textDescent()
  noStroke()
  secTrig = random(100)+width/3
  secTrig2 = random(100)+width/3
  word1 = random(phr1)
  word2 = random(phr2)
  word3 = random(phr3)
  word4 = random(phr4)
}

function draw() {
  background(50);
  noFill();
  strokeWeight(2)

  for (var x = 0; x < width; x++) {
    beginShape()
    var xoff = start;
    var y = noise(xoff) * height+80;
    vertex(x, y);
    xoff += inc;
    stroke('rgba(237,111,237, 0.90)');

    // perl1();
    // perl2();
    endShape()

  }

  firstX--
  secondX2--
  start += inc

}

function perl2(){

    for (var x2 = 0; x2 < width; x2++) {
    if (!hasStarted2 && x2 == firstX2) {
      altY2 = y2 - line1Offset2
      hasStarted2 = true
    }


    let interval2b = int(random(width-100, width-1))
    if (firstX2 < secTrig2 && !startSecond2 && x2 == interval2b) {
      console.log('the condition has been met')
      secondX2 = interval2b
      secondY2 = y2 - line2Offset2
      word2b = random(phr4)
      console.log('word2b is ',word2b)
      //use boolean to make sure only one of these spawns at a time
      startSecond2 = true
      secTrig2 = random(100)+width/3
    }
    // respawning firstX when it gets below 0
    let randomInterval2 = int(random(width-100, width))
    if (firstX2 <= 0 && x2 == randomInterval2){
        firstX2 = randomInterval2
        altY2 = y2 - line1Offset2
        word1a = random(phr3)
    }
    
    if (startSecond2) {
      push();
      noStroke()
      fill('rgba(237,111,237, 0.93)')
      text(word2b, secondX2, secondY2)
      pop()
      line(secondX2 + tDescent, secondY2+line2Offset/5, secondX2+ 5,secondY2+(line2Offset2*.85))
    }
    if (startSecond2 && secondX2 <= 0) {
      //turn off "no" when its X gets below 0
      startSecond2 = false
    }
      push()
      fill('rgba(237,111,237, 0.93)')
      noStroke()
      text(word1a, firstX2, altY2);
      pop()
      line(firstX2 + tDescent, altY2, firstX2 + tDescent, altY2+(line1Offset2*.85))// the second two coordinates are where the line meets the noise curve

  }

}


function perl1(){
  beginShape();
  var xoff = start;
  for (var x = 0; x < width; x++) {
    if (!hasStarted && x == firstX) {
      altY = y - line1Offset
      hasStarted = true
    }
    noFill();
    strokeWeight(2)
    stroke('rgba(0,255,0, 0.80)');
    var y = noise(xoff) * height+80;
    vertex(x, y);
    xoff += inc;
    // experiment with boundaries of where they can spawn - e.g. if firstX is between 100 and 200, make sure secondX is between 300 & 400
    
    let interval2 = int(random(width-100, width-1))
    // spawning "no"/secondX when "yes" gets below 100 x position
    if (firstX < secTrig && !startSecond && x == interval2) {
      secondX = interval2
      secondY = y - line2Offset
      word2 = random(phr2)
      //use boolean to make sure only one of these spawns at a time
      startSecond = true
      secTrig = random(100)+width/3
    }
    // respawning "yes"/firstX when it gets below 0
    let randomInterval = int(random(width-100, width))
    if (firstX <= 0 && x == randomInterval){
        firstX = randomInterval
        altY = y - line1Offset
        word1 = random(phr1)
    }
    
    if (startSecond) {
      push();
      noStroke()
      fill('rgba(0,255,0, 0.33)')
      text(word2, secondX, secondY)
      pop()
      line(secondX + tDescent, secondY+line2Offset/5, secondX + 5,secondY+(line2Offset*.85))
    }
    if (startSecond && secondX <= 0) {
      //turn off "no" when its X gets below 0
      startSecond = false
    }
      push()
      fill('rgba(0,255,0, 0.33)')
      noStroke()
      text(word1, firstX, altY);
      pop()
      line(firstX + tDescent, altY, firstX + tDescent, altY+(line1Offset*.85))// the second two coordinates are where the line meets the noise curve

    }
  endShape();
  firstX--
  secondX--

  start += inc;

}


  







