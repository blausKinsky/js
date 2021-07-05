let [angle, angle2, angle3] = [0,0,0];
let angleV = 0.025,angleV2 = 0.0175, angleV3 = 0.0125; //this stands for angle velocity or the speed that the angle changes in 
let aCycle = 0, a2Cycle =0, a3Cycle = 0;  
let offset = 0.000005;
let textArray = ['musk', 'maneuver', 'makeup', 'manhandle'];
let textArray2 = ['sogged', 'soaked', 'sprayed', 'slipped'];
let textArray3 = ['backlit', 'frontlit', 'twinkle', 'sidelight'];
let yWord =textArray[0], cyanWord = textArray[1], gWord = textArray2[0],mWord = textArray2[1], bWord = textArray3[0],rWord = textArray3[1];

// let hasHit = false; 

function setup() {
  createCanvas(600, 400);
  frameRate(60);
}

function draw() {
  background(0, 127);
  translate(300, 200);

  let y = map(sin(angle), -1, 1, -200, 200);
  let y2 = map(sin(angle2), -1, 1, -200, 200); 
  let y3 = map(sin(angle3), -1, 1, -200, 200); 
  let x = map(sin(angle), -1, 1, -300, 300);
  let x2 = map(sin(angle2), -1, 1, -300, 300);
  let x3 = map(sin(angle3), -1, 1, -300, 300);

function xyYellow(word1, xC,yC){
  console.log('yellow function ', word1, xC,yC);
  fill(238, 238, 33);
  noStroke();
  textSize(34);
  text(word1, 0, yC);
}

function cyan(word1, xC, yC){
  console.log('cyan function ', word1, xC,yC);
  fill(33, 238, 238);
  noStroke();
  textSize(34);
  text(word1, xC, 0);
}

//magenta
function x2yMagenta(word2){
  fill(238, 33, 238);
  noStroke(); 
  textSize(34);
  text(word2, x2,y);
}
//green
function xy2Green(word2){
  fill(33, 238, 33);
  noStroke();
  textSize(34);
  text(word2, x, y2);
} 

//red
function x3Red(redWord){
  fill(238, 33, 33);
  noStroke(); 
  textSize(34);
  text(redWord, x3, y);
}
  //blue 
function x3y2Blue(blueWord){
  fill(33, 33, 238);
  noStroke(); 
  textSize(34);
  text(blueWord, x3, y2);
}

  angle += angleV;
  angle2 += angleV2;
  angle3 += angleV3;

  aCycle = angle%TWO_PI; 
  a2Cycle = angle2%TWO_PI; 
  a3Cycle = angle3%TWO_PI; 
  a2Cycle = a2Cycle.toFixed(3);
  a3Cycle = a3Cycle.toFixed(3);

  console.log(angle, angle2, angle3, aCycle, a2Cycle, a3Cycle);

  //not sure why the logic of this didn't work
  // if (hasHit == true && myModulo > 0.05000005 && myModulo < 0.0 ){
  //   hasHit = false; 
  // }
  // if(!hasHit && myModulo < 0.05000005 && myModulo > 0.0){
  //   console.log('MODULO HIT'); //this works well but may change based on the angle info
  //   hasHit = true; 
  // }

    if(aCycle < (angleV + offset) && aCycle > 0.0){
    console.log('aCycle HIT'); 
    cyanWord = randomChoice(textArray); 
    yWord = randomChoice(textArray); 
    // console.log(cyanWord, yWord);
  }

    if(a2Cycle < angleV2 + offset && a2Cycle > 0.0){
    console.log('a2Cycle HIT'); 
    gWord = randomChoice(textArray2); 
    mWord = randomChoice(textArray2); 
    // console.log(gWord, mWord);
  }

    if(a3Cycle < angleV3 + offset && a3Cycle > 0.0){
    console.log('a3Cycle HIT'); 
    rWord = randomChoice(textArray3); 
    bWord = randomChoice(textArray3);
    console.log(rWord, bWord);
  }
  xyYellow(yWord, x, y);
  cyan(cyanWord, x, y);
  xy2Green(gWord, x, y2);
  x2yMagenta(mWord, x2,y);
  x3Red(rWord,x3,y);
  x3y2Blue(bWord,x3,y2);
}

function randomChoice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}


