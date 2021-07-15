//next: change words at 0
let [aCycle, a2Cycle, a3Cycle] = [0,0,0];
let offset = 0.000005;
let textArray = ['musk', 'maneuver', 'makeup', 'manhandle','sogged', 'soaked', 'sprayed', 'slipped','backlit', 'frontlit', 'twinkle', 'sidelight'];
let myColor = ['red', 'blue','orange','yellow', 'green','magenta'];
// let y = 0;
let aV = 0;
let angleV = [];
let pen = [];
let myClr =[];
let randomChoice =[];
let myText = [];
let counter = 0;


// let colorArray = [(238, 238, 33),(33, 238, 238),(238, 33, 238),(33, 238, 33),(238, 33, 33),(33, 33, 238)];

function setup() {
  createCanvas(600, 400);
  let angle = 0;
  for(let i=0; i<myColor.length; i++ ){
    let inc = 0.0075;
    let aVmin = 0.01275;
    aV = aVmin + inc;
    angleV = append(angleV, aV);
    // print(aV, angleV);
    pen[i] = new Pendulum(angle, angleV[i]);
    myClr[i] = pen[i].chooseColor();
    myText[i] = pen[i].chooseWord();
    // print(myClr[i], myText[i]);
  }

}
function draw() {
  background(0, 53);
  translate(300, 200);
  // aCycle = angle%TWO_PI;
  for (let i = 0; i<myColor.length; i++){
      pen[i].display(myClr[i], myText[i]);
  }
}

// class Pendulum{
//   constructor(angle, angleV){
//     this.angle = angle;
//     this.angleV = angleV;
//     //why don't i need to declare the data color in the constructor? (although it does work with it)
//     // You can declare a class attribute in any class function - it just makes more sense to do it here in the constructor so it only happens once, rather than doing it every time we call the display function.
//     // console.log('in the constructor', this.angle, this.angleV);

//   }
//   display(myClr, myText){
//     // print(counter);
//     this.myClr = myClr;
//     this.myText = myText;


//     if (counter == 0){
//           this.angle += this.angleV;
//           aCycle = this.angle%TWO_PI;
//           console.log(this.angle, aCycle);
//           // let x = map(sin(this.angle), -1, 1, -300, 300);
//           let y = map(sin(this.angle), -1, 1, (-1*height/2), height/2);
//           // fill(this.myClr);
//           // noStroke();
//           // textSize(34);
//           // text(this.myText, 0, y);
//           //this is where I tried to put the changing text when the cycle hits 0
//       //     if(aCycle < (this.angleV + offset) && aCycle > 0.0){
//       //       this.myText = this.chooseWord();
//       //       let newWord = this.chooseWord();
//       //       console.log('aCycle HIT in counter 0', this.myText, newWord);
//       // }
//           console.log('this color: ', this.myClr)
//           fill(this.myClr);
//           noStroke();
//           textSize(34);
//           text(this.myText, 0, y);
//     }
//     if (counter == 1){
//           this.angle += this.angleV;
//           // print('counter 1', this.angle, this.angleV);
//           let x = map(sin(this.angle), -1, 1,(-1*width/2), width/2);
//           // let y = map(sin(this.angle), -1, 1, -200, 200);
//           fill(this.myClr);
//           noStroke();
//           textSize(34);
//           text(this.myText, x, 0);
//         }
//     if (counter == 2){
//           this.angle += this.angleV;
//           // print('counter 2', this.angle, this.angleV);
//           let x = map(sin(this.angle), -1, 1, (-1*width/2), width/2);
//           let y = map(sin(this.angle), -1, 1, (-1*height/2), height/2);
//           fill(this.myClr);
//           noStroke();
//           textSize(34);
//           text(this.myText, x, y);
//         }

//     if (counter == 3){
//           this.angle += this.angleV;
//           // let newAngle = this.angleV + this.angleV;
//           // this.angle += newAngle;
//           // print('counter 3', 'newAngle is ', this.angle, this.angleV);
//           let x = map(cos(this.angle), -1, 1, (-1*width/2), width/2);
//           let y = map(cos(this.angle), -1, 1, (-1*height/2), height/2);
//           fill(this.myClr);
//           noStroke();
//           textSize(34);
//           text(this.myText, x, y);
//         }
//     if (counter == 4){
//           // let newXangle = this.angleV + this.angleV;
//           // let newYangle = this.angle;
//           // this.angle += newXangle;
//           // newYangle += this.angleV;
//           this.angle += this.angleV;
//           // print('counter 4', 'newAngle is ', newXangle, this.angle, this.angleV);
//           let x = map(cos(this.angle), -1, 1, (-1*width/2), width/2);
//           let y = map(sin(this.angle), -1, 1, (-1*height/2), height/2);
//           fill(this.myClr);
//           noStroke();
//           textSize(34);
//           text(this.myText, x, y);
//     }

//     if (counter == 5) {
//           this.angle += this.angleV;
//           // let newYangle2 = this.angleV + this.angleV;
//           // print('counter is ', counter, this.angle, this.angleV);
//           let x = map(sin(this.angle), -1, 1, (-1*width/2), width/2);
//           let y = map(cos(this.angle), -1, 1, (-1*height/2), height/2);
//           fill(this.myClr);
//           noStroke();
//           textSize(34);
//           text(this.myText, x, y);
//     }


//     counter += 1;
//     if (counter>myColor.length-1){
//       counter = 0;
//     }

//   }

//     chooseColor(){
//       let ranColor = int(random(myColor.length));
//       // print(ranColor, myColor[ranColor]);
//       return myColor[ranColor];
//     }
//     chooseWord(){
//       let ranWord = int(random(textArray.length));
//       // print(ranWord, textArray[ranWord]);
//       return textArray[ranWord];
//     }

// //     randomChoice(arr) {
// //     return arr[Math.floor(Math.random() * arr.length)];
// // }
// }






