let phr1 = ['field note', 'ants', 'termites, not ants', 'spikes', 'dreams of collapse', 'elastic waistlines', 'precipitous fall', 'a story unshared','desirelessness & moping','that upper lip thing']
let phr2 = ['placebos','pulses','pulsing', 'plagues', 'porches','personal "brand"','the stumbles', 'feeling stalked','clam sighting', 'love of stumbling','another vortex','feeling stalked']
let word1 
let word2 
let inc = 0.01;
let start = 0;
let dep = 300;
let secTrig 
let firstX 
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
  createCanvas(800, 800);
  frameRate(80);
  firstX = width -1
  textFont('georgia',[25])
  tDescent = textDescent()
  console.log('the textDescent is ', tDescent)
  noStroke()
  secTrig = random(100)+width/3
  word1 = random(phr1)
  word2 = random(phr2)
  // textSize(20,[12])
  // strokeWeight(1)

}

function draw() {
  background(50);
  
  // stroke(255);
  beginShape();
  var xoff = start;
  currentSecond = second();
  // console.log('firstX: ', firstX)

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
    // store these variables for when we swap location

    // get y position for some X
    if (x == timerX) {
      let timerY = y
    }
    if (currentSecond%4 == 0 && !hasHit){
        // onThree();
        hasHit = true;
        lastChange = currentSecond;
       // dep = 0;
        console.log('in the condtional statement ', hasHit, lastChange);
      // spawn new text using timerY and timerX
    }
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
      push()
      noStroke()
      fill('rgba(0,255,0, 0.33)')
      text(word2, secondX, secondY)
      pop()
      line(secondX + tDescent, secondY+line2Offset/5, secondX + 5,secondY+(line2Offset*.85))

      // line(secondX + 5, secondY+line2Offset/5, secondX + 5,secondY+(line2Offset*.85))
      // line(secondX + 5, secondY, secondX + 5,secondY+(line2Offset*.85))

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

      // line(firstX + 5, altY+line1Offset/5, firstX + 5, altY+(line1Offset*.85))
      // line(firstX + 5, altY, firstX + 5, altY+(line1Offset*.85))

    //this is creating that weird space - we're drawing yes over and over
    }

  endShape();
  firstX--
  secondX--

  start += inc;
}





