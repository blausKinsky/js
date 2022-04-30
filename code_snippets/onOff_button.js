let onOff = false; 


function startStop(){
  console.log('entering the function onOff is', onOff);
  if (onOff == false){
    osc.start(); 
    onOff = true; 
    console.log('if condition is now', onOff);
  }else{
    osc.stop(); 
    onOff = false; 
    console.log('else oo is ', onOff);
  }
}