let phr1 = ['field note', 'ants', 'termites, not ants', 'spikes', 'dreams of collapse', 'elastic waistlines', 'precipitous fall', 'a story unshared','desirelessness & moping','that upper lip thing']
let phr2 = ['placebos','pulses','pulsing', 'plagues', 'porches','personal "brand"','the stumbles', 'feeling stalked','clam sighting', 'love of stumbling','another vortex','feeling stalked']
let phr3 = ['salt mine', 'salt farm','salty taste','salty rhyme','quite salty', 'very salty','not enough salt','that salty thing']
let word1 
let word2 
let word3 
let inc = 0.0175;
let inc2 = 0.015
let start = 0;
let start2 =0
let dep = 300;
let secTrig 
let firstX 
let firstX2
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
let tDescent 
let halfMinus
let tWidth1, tWidth2

function setup() {
  createCanvas(windowWidth, 600);
  halfMinus = width/2 - width/20
  frameRate(80);
  firstX = halfMinus -1
  firstX2 = halfMinus - 2
  textFont('georgia',[25])
  tDescent = textDescent()
  noStroke()
  secTrig = random(50)+width/4
  word1 = random(phr1)
  word2 = random(phr2)
  word3 = random(phr3)
}

function draw() {
  background(50);
  beginShape();
  var xoff = start;
  var xoff2 = start2

  for (var x = 0; x < halfMinus; x++) {
    if (!hasStarted && x == firstX) {
      altY = y - line1Offset
      console.log('the altY is ', altY)
      hasStarted = true
    }

    noFill();
    strokeWeight(2)
    stroke('rgba(0,255,0, 0.80)');
    var y = noise(xoff) * height+80;
    vertex(x, y);

    xoff += inc;

    
    // experiment with boundaries of where they can spawn - e.g. if firstX is between 100 and 200, make sure secondX is between 300 & 400
    
    let interval2 = int(random(halfMinus, halfMinus-1))
    // spawning "no"/secondX when "yes" gets below 100 x position
    if (firstX < secTrig && !startSecond && x == interval2) {
      secondX = interval2
      secondY = y - line2Offset
      word2 = random(phr2)
      tWidth2 = textWidth(word2)
      //use boolean to make sure only one of these spawns at a time
      startSecond = true
      secTrig = random(100)+width/3
    }
    // respawning firstX when it gets below 0
    let randomInterval = int(random(halfMinus-50, width/2))
    if (firstX <= 0 && x == randomInterval){
        firstX = randomInterval
        altY = y - line1Offset
        word1 = random(phr1)
        tWidth1 = textWidth(word1)

    }
    
    if (startSecond) {
      push()
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
      // console.log('the text is 1, altY is ', altY)
      text(word1, firstX, altY);
      pop()
      line(firstX + tDescent, altY, firstX + tDescent, altY+(line1Offset*.85))// the second two coordinates are where the line meets the noise curve

    }

  push()
  fill(50,50,75)
  noStroke()
  rect(halfMinus,0, 50,height)
  pop()
  endShape();
  firstX--
  secondX--

  start += inc;
}





