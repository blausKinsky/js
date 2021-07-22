class Pendulum{
  constructor(angle, angleV,myX,myY,typ){
    this.angle = angle;
    this.angleV = angleV;
    this.x = myX;
    this.y = myY; 
    this.typ = typ; 
    // console.log('in the constructor', this.angle, this.angleV);

  }
  display(myClr, myText){
    // print(counter);
    this.myClr = myClr;
    this.myText = myText;
    this.angle += this.angleV;
    aCycle = this.angle%TWO_PI;
    // console.log(this.angle, aCycle);
    let x = map(sin(this.angle), -1, 1, -300, 300);
    let y = map(sin(this.angle), -1, 1, (-1*height/2), height/2);
    // fill(this.myClr);
    // noStroke();
    // textSize(34);
    // text(this.myText, 0, y);
    //this is where I tried to put the changing text when the cycle hits 0
    if(aCycle < (this.angleV + offset) && aCycle > 0.0){
      this.myText = this.chooseWord();
      let newWord = this.chooseWord();
      // console.log('aCycle HIT in counter 0', this.myText, newWord);
    }
    console.log('this color: ', this.myClr, aCycle);
    fill(this.myClr);
    noStroke();
    textSize(34);
    text(this.myText, x, y);
  }

  typeSetter(typ, angleV,angle){
    //setter checks the type of pendulum
      switch(typ){
        case 0:
          aCycle = angle%TWO_PI; 
          // x = map(sin(this.angle), -1, 1, -300, 300);
          // y = map(sin(this.angle), -1, 1, (-1*height/2), height/2);
          console.log('the type is 0', typ, angleV, angle, aCycle);

          if(aCycle < (angleV + offset) && aCycle > 0.0){
            // tempText = chooseWord();
            // tempColor = chooseColor(); 
            console.log('aCycle HIT in counter 0');
          }
          //question about whether I should be using this.typ, this.angleV, this.angle

        break;

        case 1:
          console.log('the type is 1', typ, angleV, angle);

        break;

        case 2:
          console.log('the type is 2', typ, angleV, angle);

        break;

        case 3:
          console.log('the type is 3', typ, angleV, angle);   

        break;

        case 4:
          console.log('the type is 4', typ, angleV, angle);

        break;

        case 5:
          console.log('the type is 5', typ, angleV, angle);

        break;
      }


  }
    
    // if (counter == 1){
    //       this.angle += this.angleV;
    //       // print('counter 1', this.angle, this.angleV);
    //       let x = map(sin(this.angle), -1, 1,(-1*width/2), width/2);
    //       // let y = map(sin(this.angle), -1, 1, -200, 200);
    //       fill(this.myClr);
    //       noStroke();
    //       textSize(34);
          // text(this.myText, x, 0);
    //     }
    // if (counter == 2){
    //       this.angle += this.angleV;
    //       // print('counter 2', this.angle, this.angleV);
    //       let x = map(sin(this.angle), -1, 1, (-1*width/2), width/2);
    //       let y = map(sin(this.angle), -1, 1, (-1*height/2), height/2);
    //       fill(this.myClr);
    //       noStroke();
    //       textSize(34);
    //       text(this.myText, x, y);
    //     }

    // if (counter == 3){
    //       this.angle += this.angleV;
    //       // let newAngle = this.angleV + this.angleV;
    //       // this.angle += newAngle;
    //       // print('counter 3', 'newAngle is ', this.angle, this.angleV);
    //       let x = map(cos(this.angle), -1, 1, (-1*width/2), width/2);
    //       let y = map(cos(this.angle), -1, 1, (-1*height/2), height/2);
    //       fill(this.myClr);
    //       noStroke();
    //       textSize(34);
          // text(this.myText, x, y);
    //     }
    // if (counter == 4){
    //       // let newXangle = this.angleV + this.angleV;
    //       // let newYangle = this.angle;
    //       // this.angle += newXangle;
    //       // newYangle += this.angleV;
    //       this.angle += this.angleV;
    //       // print('counter 4', 'newAngle is ', newXangle, this.angle, this.angleV);
    //       let x = map(cos(this.angle), -1, 1, (-1*width/2), width/2);
    //       let y = map(sin(this.angle), -1, 1, (-1*height/2), height/2);
    //       fill(this.myClr);
    //       noStroke();
    //       textSize(34);
    //       text(this.myText, x, y);
    // }

    // if (counter == 5) {
    //       this.angle += this.angleV;
    //       // let newYangle2 = this.angleV + this.angleV;
    //       // print('counter is ', counter, this.angle, this.angleV);
    //       let x = map(sin(this.angle), -1, 1, (-1*width/2), width/2);
    //       let y = map(cos(this.angle), -1, 1, (-1*height/2), height/2);
    //       fill(this.myClr);
    //       noStroke();
    //       textSize(34);
    //       text(this.myText, x, y);
    // }


    // counter += 1;
    // if (counter>myColor.length-1){
    //   counter = 0;
    // }
// console.log('this is the counter', counter); 

    chooseColor(){
      let ranColor = int(random(myColor.length));
      // print(ranColor, myColor[ranColor]);
      return myColor[ranColor];
    }
    chooseWord(){
      let ranWord = int(random(textArray.length));
      // print(ranWord, textArray[ranWord]);
      return textArray[ranWord];
    }

}


// //     randomChoice(arr) {
// //     return arr[Math.floor(Math.random() * arr.length)];
// // }
// }
