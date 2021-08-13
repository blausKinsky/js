class Pendulum{
  constructor(typ){
    this.angle = 0;
    this.aCycle = 0;
    // this.angleV = angleV;
    this.x = 0;
    this.y = 0; 
    this.typ = typ; 
    this.clr = 'blue';
    this.txt = 'yes'; 
    this.angleV = [0.0085, 0.010, 0.0125, 0.025, 0.375, 0.50];
}

//convert all variables to class specific variables, make a self-contained class with no parameters
//then create object version
  typeSetter(){
    //setter checks the type of pendulum
    // console.log('type: ', this.typ);
    this.angle += this.angleV[this.typ]; 
    // console.log('angle: ', this.angle);
    
      switch(this.typ){
        case 0:
          this.aCycle = this.angle%TWO_PI; 
          this.x = map(sin(this.angle), -1, 1, (-1*width/2), width/2);
          this.y = map(sin(this.angle), -1, 1, (-1*height/2), height/2);
          console.log('the type is 0', this.typ, this.angleV[this.typ], 'the x and y are ', this.x,this.y);
          if(this.aCycle < (this.angleV[this.typ] + offset) && this.aCycle > 0.0){
            this.txt = textArray[int(random(textArray.length))]; 
            this.clr = myColor[int(random(myColor.length))]; 
          }

        break;

        case 1:
          this.aCycle = this.angle%TWO_PI; 
          this.x = 0;
          // this.x = map(sin(this.angle), -1, 1,(-1*width/2), width/2));
          this.y = map(sin(this.angle), -1, 1, (-1*height/2), height/2);

          if(this.aCycle < (this.angleV[this.typ] + offset) && this.aCycle > 0.0){
            this.txt = textArray[int(random(textArray.length))]; 
            this.clr = myColor[int(random(myColor.length))]; 
            // console.log('a2Cycle HIT in case 1', this.txt, this.clr);
             }

        break;

        case 2:
          this.aCycle = this.angle%TWO_PI; 
          this.x = map(sin(this.angle), -1, 1, (-1*width/2), width/2);
          this.y = 0; 
          // this.y = map(sin(angle), -1, 1, (-1*height/2), height/2);
          // console.log('the type is 0', typ, angleV, angle, a3Cycle, 'the x and y are ', this.x,this.y);

          if(this.aCycle < (this.angleV[this.typ] + offset) && this.aCycle > 0.0){
            this.txt = textArray[int(random(textArray.length))]; 
            this.clr = myColor[int(random(myColor.length))]; 
            // console.log('aC3ycle HIT in case 2', this.txt, this.clr);
             }

        break;

        case 3:
          this.aCycle = this.angle%TWO_PI; 
          //changed to cos of x 
          this.x = map(cos(this.angle), -1, 1, (-1*width/2), width/2);
          this.y = map(sin(this.angle), -1, 1, (-1*height/2), height/2);
          // console.log('the type is 0', typ, angleV, angle, a4Cycle, 'the x and y are ', this.x,this.y);

          if(this.aCycle < (this.angleV[this.typ] + offset) && this.aCycle > 0.0){
            this.txt = textArray[int(random(textArray.length))]; 
            this.clr = myColor[int(random(myColor.length))]; 
            // console.log('a4Cycle HIT in case 3', this.txt, this.clr);
          }

        break;

        case 4:
          // changed to cos of y
          this.aCycle = this.angle%TWO_PI; 
          this.x = map(sin(this.angle), -1, 1, (-1*width/2), width/2);
          this.y = map(cos(this.angle), -1, 1, (-1*height/2), height/2);
          // console.log('the type is 0', typ, angleV, angle, a5Cycle, 'the x and y are ', this.x,this.y);

          if(this.aCycle < (this.angleV[this.typ] + offset) && this.aCycle > 0.0){
            this.txt = textArray[int(random(textArray.length))]; 
            this.clr = myColor[int(random(myColor.length))]; 
            // console.log('a5Cycle HIT in case 4 ', this.txt, this.clr);
             }

        break;

        case 5:
          this.aCycle = this.angle%TWO_PI; 
          //mapped -1, 1 to 1, -1
          this.x = map(sin(this.angle), 1, -1, (-1*width/2), width/2);
          this.y = map(sin(this.angle), -1, 1, (-1*height/2), height/2);
          // console.log('the type is 0', typ, angleV, angle, a6Cycle, 'the x and y are ', this.x,this.y);

          if(this.aCycle < (this.angleV[this.typ] + offset) && this.aCycle > 0.0){
            this.txt = textArray[int(random(textArray.length))]; 
            this.clr = myColor[int(random(myColor.length))]; 
            // console.log('a6Cycle HIT in case 5', this.txt, this.clr);
          }

        break;
      }
  }
}
    
