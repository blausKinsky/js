var vol = -24; 
var xoff = 0;
var yoff = 0; 
let inc = 0.01;
let inc2 = 0.01; 
let root = 60; 
let newRoot = 90;
let words = ['max', 'min', 'fat', 'thin', 'one', 'two', 'zero', 'yes', 'no']; 
let newchange = 'love';
// inc2 = inc2*.01;
let onOff = false; 
let oscArray = [];
let whichOSC = 0; 

for (let i=0; i<6; i++){
      oscArray[i] = new Tone.Oscillator({
            "type" : "sine",
            "frequency" : root*(i+1),
            "volume" : -24
      }).toMaster(); 
      oscArray.push(oscArray[i]);
}

function sonifyXY(x, y, whichOSC){
    whichOSC = whichOSC+1; 
    console.log('the x and y are', x, y,whichOSC); 

    newX = map(x, 0, width, 0,100);
    // newY = map(y, 0, height, -30, -16);  

    newX = ((root*whichOSC) + newX);
    console.log('NEWX,NEWY,I', newX, whichOSC); 

    oscArray[whichOSC].frequency.value = newX; 
    // oscArray[whichOSC].volume.value = (newY);
    // console.log(oscArray[whichOSC]);  
}

function startStop(){
  console.log('entering the function onOff is', onOff);
  if (onOff == false){
      for (let i=0; i<6; i++){
            oscArray[i].start(); 
      }
      onOff = true; 
  }else{
      for (let i=0; i<6; i++){
            oscArray[i].stop(); 
      } 
    onOff = false; 
  }
}