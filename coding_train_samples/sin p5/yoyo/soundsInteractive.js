// this code creates a sound for each text and changes it's frequency based on the x location from the related files. 
//if you press the 1 - 6 keys, you can hear just the associated oscilater with that text and see just that text. 
var vol = -24; 
let root = 60; 
// let newRoot = 90;
let onOff = false; 
let oscArray = [];
let whichOSC = 0; 
let mute = -100; 
//the for loop below initializes the oscillator array 
for (let i=0; i<6; i++){
      oscArray[i] = new Tone.Oscillator({
            "type" : "sine",
            "frequency" : root*(i+1),
            "volume" : -24
      }).toMaster(); 
      oscArray.push(oscArray[i]);
      // console.log('the freq is ', i, oscArray[i]); 
}

function sonifyXY(x, whichOSC, press){
    // console.log('the sonify XY has been called');
    xFactor = whichOSC+1; 
    // console.log('the x and y are', x, y,whichOSC); 
    newX = map(x, 0, width, 0,100);
    // newY = map(y, 0, height, -30, -16);  
    newX = ((root*xFactor) + newX);
    // console.log('outside the swithch the NEWX,whichOSC', newX, whichOSC); 
    if (press == true){
      for (i=0; i<6;i++){
            if (i != whichOSC){
              oscArray[i].volume.value = mute;
          }else{
             oscArray[whichOSC].volume.value = vol;
             oscArray[whichOSC].frequency.value = newX; 
            }
          }
          // console.log('newX & whichOSC', newX, whichOSC);
        }
      oscArray[whichOSC].frequency.value = newX; 
      oscArray[whichOSC].volume.value = vol;
      // console.log("the currently playing osc is ", whichOSC, oscArray[whichOSC].volume.value,oscArray[whichOSC].frequency.value );  
    }

function startStop(){
  console.log('entering startStop onOff is', onOff);
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

