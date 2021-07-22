class Pendulum{
  constructor(angle, angleV,myX,myY,typ, myClr,myText){
    this.angle = angle;
    this.angleV = angleV;
    this.x = myX;
    this.y = myY; 
    this.typ = typ; 
    this.clr = myClr;
    this.txt = myText; 
  }

  typeSetter(typ, angleV,angle){
    //setter checks the type of pendulum
      switch(typ){
        case 0:
          aCycle = angle%TWO_PI; 
          this.x = map(sin(angle), -1, 1, -300, 300);
          this.y = map(sin(angle), -1, 1, (-1*height/2), height/2);
          // console.log('the type is 0', typ, angleV, angle, aCycle, 'the x and y are ', this.x,this.y);

          if(aCycle < (angleV + offset) && aCycle > 0.0){
            this.txt = textArray[int(random(textArray.length))]; 
            this.clr = myColor[int(random(myColor.length))]; 
            // console.log('aCycle HIT in case 0', this.txt, this.clr);
          // console.log('aCycle HIT in counter 0', textArray[int(random(textArray.length))], myColor[int(random(myColor.length))]);
          }
          //question about whether I should be using this.typ, this.angleV, this.angle

        break;

        case 1:
          a2Cycle = angle%TWO_PI; 
          this.x = map(sin(angle), -1, 1, -300, 300);
          this.y = map(sin(angle), -1, 1, (-1*height/2), height/2);
          // console.log('the type is 0', typ, angleV, angle, a2Cycle, 'the x and y are ', this.x,this.y);

          if(a2Cycle < (angleV + offset) && a2Cycle > 0.0){
            this.txt = textArray[int(random(textArray.length))]; 
            this.clr = myColor[int(random(myColor.length))]; 
            // console.log('a2Cycle HIT in case 1', this.txt, this.clr);
   
          // console.log('a2Cycle HIT in counter 0', textArray[int(random(textArray.length))], myColor[int(random(myColor.length))]);
          }
          // console.log('the type is 1', typ, angleV, angle);

        break;

        case 2:
          a3Cycle = angle%TWO_PI; 
          this.x = map(sin(angle), -1, 1, -300, 300);
          this.y = map(sin(angle), -1, 1, (-1*height/2), height/2);
          // console.log('the type is 0', typ, angleV, angle, a3Cycle, 'the x and y are ', this.x,this.y);

          if(a3Cycle < (angleV + offset) && a3Cycle > 0.0){
            this.txt = textArray[int(random(textArray.length))]; 
            this.clr = myColor[int(random(myColor.length))]; 
            // console.log('aC3ycle HIT in case 2', this.txt, this.clr);
   
          // console.log('a3Cycle HIT in counter 0', textArray[int(random(textArray.length))], myColor[int(random(myColor.length))]);
          }
          // console.log('the type is 2', typ, angleV, angle);

        break;

        case 3:
          a4Cycle = angle%TWO_PI; 
          this.x = map(sin(angle), -1, 1, -300, 300);
          this.y = map(sin(angle), -1, 1, (-1*height/2), height/2);
          // console.log('the type is 0', typ, angleV, angle, a4Cycle, 'the x and y are ', this.x,this.y);

          if(a4Cycle < (angleV + offset) && a4Cycle > 0.0){
            this.txt = textArray[int(random(textArray.length))]; 
            this.clr = myColor[int(random(myColor.length))]; 
            // console.log('a4Cycle HIT in case 3', this.txt, this.clr);
   
          // console.log('a4Cycle HIT in counter 0', textArray[int(random(textArray.length))], myColor[int(random(myColor.length))]);
          }
          // console.log('the type is 3', typ, angleV, angle);   

        break;

        case 4:
          // console.log('the type is 4', typ, angleV, angle);
          a5Cycle = angle%TWO_PI; 
          this.x = map(sin(angle), -1, 1, -300, 300);
          this.y = map(sin(angle), -1, 1, (-1*height/2), height/2);
          // console.log('the type is 0', typ, angleV, angle, a5Cycle, 'the x and y are ', this.x,this.y);

          if(a5Cycle < (angleV + offset) && a5Cycle > 0.0){
            this.txt = textArray[int(random(textArray.length))]; 
            this.clr = myColor[int(random(myColor.length))]; 
            // console.log('a5Cycle HIT in case 4 ', this.txt, this.clr);
   
          // console.log('a5Cycle HIT in case 4 ', textArray[int(random(textArray.length))], myColor[int(random(myColor.length))]);
          }

        break;

        case 5:
          a6Cycle = angle%TWO_PI; 
          this.x = map(sin(angle), -1, 1, -300, 300);
          this.y = map(sin(angle), -1, 1, (-1*height/2), height/2);
          // console.log('the type is 0', typ, angleV, angle, a6Cycle, 'the x and y are ', this.x,this.y);

          if(a6Cycle < (angleV + offset) && a6Cycle > 0.0){
            this.txt = textArray[int(random(textArray.length))]; 
            this.clr = myColor[int(random(myColor.length))]; 
            // console.log('a6Cycle HIT in case 5', this.txt, this.clr);
            // console.log('a6Cycle HIT in counter 0', textArray[int(random(textArray.length))], myColor[int(random(myColor.length))]);
          }
          // console.log('the type is 5', typ, angleV, angle);

        break;
      }
  }
}
    

