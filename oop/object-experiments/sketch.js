// let offset = 0.000005;
let t = ['musk', 'maneuver', 'makeup', 'manhandle','sogged', 'soaked', 'sprayed', 'slipped','backlit', 'frontlit', 'twinkle', 'sidelight'];
let c = ['red', 'blue','orange','yellow', 'green','magenta'];
width = 600;
height = 400; 

const typog = {
  clr: 'red', 
  word: 'slight', 
  txtSz: 72,
  x: 300,
  y: 200
};
// let y = 0;
// let x = 0; 
// let aV = 0;
// let angleV = [];
// let pen = [];
// let myClr =[];
// let myText = [];
// let initAngle = 0; 

function setup() {
  createCanvas(600, 400);
  background(50);
  
}

function draw() {
  
  textAlign(CENTER); 
  // fill(c[1]); 
  noStroke();
  // textSize(34);
  fill(typog.clr);
  textSize(typog.txtSz); 
  text(typog.word, typog.x, typog.y); 
  // text(t[0], width/2,height/2);

  // translate(300, 200);

}






