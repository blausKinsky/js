//next: change words at 0
let [aCycle, a2Cycle, a3Cycle, a4Cycle, a5Cycle, a6Cycle] = [0,0,0,0,0,0];
let offset = 0.000005;
let textArray = ['musk', 'maneuver', 'makeup', 'manhandle','sogged', 'soaked', 'sprayed', 'slipped','backlit', 'frontlit', 'twinkle', 'sidelight'];
let myColor = ['red', 'blue','orange','yellow', 'green','magenta'];
let y = 0;
let x = 0; 
let aV = 0;
let angleV = [];
let pen = [];
let myClr =[];
let randomChoice =[];
let myText = [];
let counter = 0;
let angle = [0,0,0,0,0,0]; 
let inc = 0.0075;
let aVmin = 0.01275;
let vStart = 0.200
let vectorSetup = [];
let tempText = ''; 
let tempColor = myColor[1]; 
// let colorArray = [(238, 238, 33),(33, 238, 238),(238, 33, 238),(33, 238, 33),(238, 33, 33),(33, 33, 238)];

function setup() {
  createCanvas(600, 400);
  for(let i=0; i<myColor.length; i++ ){
    // aV = aVmin + inc;
    // aV += aV
    aV = (i * .0075) + .01275; 
    // vectorSetup[i] = aV; 
    angleV = append(angleV, aV);// I'm using a for loop to generate the angleV array
    print('i is ', i, aV, angleV);

    myClr[i] = myColor[int(random(myColor.length))];
    myText[i] = textArray[int(random(textArray.length))];
    pen[i] = new Pendulum(angle, angleV[i], 0, 0, i, myClr[i],myText[i]);
  }
}

function draw() {
  background(50, 200);
  translate(300, 200);
  for (let i = 0; i<myColor.length; i++){
      angle[i] += angleV[i]; 
      pen[i].typeSetter(i,angleV[i], angle[i]); 
      // console.log('pen ', i, 'ANGLE is ', pen[i].angle); 
      // console.log('the x & y parameter ', pen[i].x, pen[i].y);
      // console.log('THE TEXT AND COLOR ARE ', pen[i].txt, pen[i].clr);
      fill(pen[i].clr);
      noStroke();
      textSize(34);
      text(pen[i].txt, pen[i].x, pen[i].y);
  }
}






