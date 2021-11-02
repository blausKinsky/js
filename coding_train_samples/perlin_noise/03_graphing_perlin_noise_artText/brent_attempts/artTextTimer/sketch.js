let phr1 = ['field note', 'ants', 'termites, not ants', 'spikes', 'dreams of collapse', 'elastic waistlines', 'precipitous fall', 'a story unshared','desirelessness & moping','that upper lip thing']
let phr2 = ['placebos','pulses','pulsing', 'plagues', 'porches','personal "brand"','the stumbles', 'feeling stalked','clam sighting', 'love of stumbling','another vortex','feeling stalked']
let word1 
let word2 
let word3
let y
let inc = 0.01;
let start = 0;
let dep = 300;
let secTrig 
let firstX 
let thirdX
let altY = 0
let line1Offset = 30
let line2Offset = 40 
let secondX = 300;
let secondY = 0
let hasHit = false;
let lastChange = 0;
let hasStarted = false;
let startSecond = false;
let tDescent 
//for doing timer stuff
let timerX = 300


function setup() {
  createCanvas(600, 600);
  frameRate(72);
  firstX = width -1
  textFont('georgia',[25])
  tDescent = textDescent()
  noStroke()
  secTrig = random(width/6)+width/3
  word1 = random(phr1)
  word2 = random(phr2)
}

function draw() {
  background(50);
  beginShape();
  var xoff = start;
  currentSecond = second();
  console.log(currentSecond)
  // console.log('firstX: ', firstX)
  for (var x = 0; x < width; x++) {
    if (!hasStarted && x == firstX) {//review what this significance is - firstX is like x1
      altY = y - line1Offset
      hasStarted = true
    }
    noFill();
    strokeWeight(2)
    stroke('rgba(0,255,0, 0.80)');
    var y = noise(xoff) * height+80;
    vertex(x, y);
    xoff += inc;

    if (x == timerX) {//when will this condition be met? 
      let timerY = y
    }
    if (currentSecond%5 == 0 && !hasHit){
        timerX = 399
        timerY = y - line2Offset
        word3 = random(phr2)
       // dep = 0;
        console.log('in the condtional statement ', hasHit, lastChange, word3);
        hasHit = true;
        lastChange = currentSecond;
      // spawn new text using timerY and timerX
      // we need something to make hasHit false again
    }
    // experiment with boundaries of where they can spawn - e.g. if firstX is between 100 and 200, make sure secondX is between 300 & 400
    
    //this spawns the text using the x values
    let interval2 = int(random(width-100, width-1))
    // spawning "no"/secondX when "yes" gets below 100 x position
    if (firstX < secTrig && !startSecond && x == interval2) {
      secondX = interval2
      secondY = y - line2Offset
      //use boolean to make sure only one of these spawns at a time
      startSecond = true
      secTrig = random(100)+width/3
      
    }
    let reSpawn1Xval = random(width/10)

    // respawning "yes"/firstX when it gets below 0
    let randomInterval = int(random(width-100, width))
    if (firstX <= reSpawn1Xval && x == randomInterval){
        firstX = randomInterval
        altY = y - line1Offset
        word1 = random(phr1)
    }

    if (hasHit && secondX <= 0) {
      //turn off "no" when its X gets below approx 1/5th of the horiz axis
      startSecond = false
    }

    if (currentSecond>lastChange){
      hasHit = false
    }

    if (hasHit){
      push()
      noStroke()
      fill('rgba(0,255,0, 0.33)')
      text(word3, timerX, timerY)
      pop()
      line(timerX + tDescent, timerY, timerX + tDescent, timerY+(line1Offset*.85))// the second two coordinates are where the line meets the noise curve

    }
    
    if (startSecond) {
      push()
      noStroke()
      fill('rgba(0,255,0, 0.33)')
      text(word2, secondX, secondY)
      pop()
      line(secondX + tDescent, secondY+line2Offset/5, secondX + 5,secondY+(line2Offset*.85))
      // line(secondX + 5, secondY, secondX + 5,secondY+(line2Offset*.85))
    }

    if (startSecond && secondX <= 0) {
      //turn off "no" when its X gets below approx 1/5th of the horiz axis
      startSecond = false
    }
      push()
      fill('rgba(0,255,0, 0.33)')
      noStroke()
      text(word1, firstX, altY);
      pop()
      line(firstX + tDescent, altY, firstX + tDescent, altY+(line1Offset*.85))// the second two coordinates are where the line meets the noise curve
      // line(firstX + 5, altY, firstX + 5, altY+(line1Offset*.85))

    }

  endShape();
  firstX--
  secondX--
  timerX--

  start += inc;
}





