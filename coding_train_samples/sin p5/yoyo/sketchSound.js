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
let isPressed = false; 

function setup() {
  createCanvas(600, 400);
  for(let i=0; i<myColor.length; i++ ){
    aV = (i * .0065) + .0065; 
    angleV = append(angleV, aV);//a for loop to generate the angleV array
    myClr[i] = myColor[int(random(myColor.length))];
    myText[i] = textArray[int(random(textArray.length))];
    pen[i] = new Pendulum(initAngle, angleV[i], 0, 0, i, myClr[i],myText[i]);
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
      // text(pen[i].txt, pen[i].x, pen[i].y);
      // sonifyXY(pen[i].x, pen[i].y, i); 
      if (keyIsPressed) {
        // console.log('keyIsPressed');
        isPressed = true; 
        let m = key-1;
        
        sonifyXY(pen[m].x, m, isPressed);
        text(pen[m].txt, pen[m].x, pen[m].y);
        console.log('key is ', key); 

        // for (j =1;j<7;j++){
        //   if (key == j) {
          // sonifyXY(pen[j-1].x, j-1, isPressed);
          // text(pen[j-1].txt, pen[j-1].x, pen[j-1].y);
          // console.log('key is ', key); 
        //   }
        // }
      } else {
        sonifyXY(pen[i].x, i); 
        text(pen[i].txt, pen[i].x, pen[i].y);
        isPressed = false; 
        //if no key is pressed play all
      }
        
    }
}






