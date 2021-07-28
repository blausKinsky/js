let offset = 0.000005;
let textArray = ['musk', 'maneuver', 'makeup', 'manhandle','sogged', 'soaked', 'sprayed', 'slipped','backlit', 'frontlit', 'twinkle', 'sidelight'];
let myColor = ['red', 'blue','orange','yellow', 'green','magenta'];
let y = 0;
let x = 0; 
let aV = 0;
let angleV = [];
let pen = [];
let myClr =[];
let myText = [];
let initAngle = 0; 

function setup() {
  createCanvas(600, 400);
  for(let i=0; i<myColor.length; i++ ){
    aV = (i * .0065) + .0065; 
    angleV = append(angleV, aV);//a for loop to generate the angleV array
    myClr[i] = myColor[int(random(myColor.length))];
    myText[i] = textArray[int(random(textArray.length))];
    pen[i] = new Pendulum(i);
  }
}

function draw() {
  background(50, 180);
  translate(300, 200);
  for (let i = 0; i<myColor.length; i++){
      pen[i].typeSetter(); 
      fill(pen[i].clr);
      noStroke();
      textSize(34);
      text(pen[i].txt, pen[i].x, pen[i].y);
  }
}






