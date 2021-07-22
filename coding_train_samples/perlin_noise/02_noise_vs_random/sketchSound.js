// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/YcdldZ1E9gU
var freq = 220;
var vol = -12; 
var xoff = 0;
var yoff = 0; 
let inc = 0.01;
let inc2 = 0.01; 
let words = ['max', 'min', 'fat', 'thin', 'one', 'two', 'zero', 'yes', 'no']; 
let newchange = 'love';
// inc2 = inc2*.01;
let onOff = false; 

var osc = new Tone.Oscillator({
      "type" : "sawtooth",
      "frequency" : 220,
      "volume" : -12
}).toMaster(); 

// function start(){ 
//   osc.start(); 
// }

// function stop(){
//   osc.stop(); 
// }

function startStop(){
  console.log('entering the function onOff is', onOff);
  if (onOff == false){
    osc.start(); 
    onOff = true; 
    console.log('if condition oo is now', onOff);
  }else{
    osc.stop(); 
    onOff = false; 
    console.log('else oo is ', onOff);
  }
}

function setup() {
  createCanvas(400, 400);
  inc2 = random()*inc2; 
  // print(inc2); 
}

function draw() {
  background(51);
  xoff += inc;
  yoff -= inc2;
  // print(yoff); 

  //var x = random(width);
  var x = map(noise(xoff), 0, 1, 0, width);
  var y = map(noise(yoff), 0, 1, 0, height); 

  var f = map(noise(xoff), 0, 1, 180, 260);
  var v = map(noise(yoff), 0, 1, 0, -36); 

  changeSound(f, v); 
  fill(255);
  textSize(24); 
  text(newchange, x, y);
  // ellipse(x, y, 24, 24);

  if (yoff < 0 || yoff > height){
  	inc2 = inc2 * -1;
  }
  // print(x, y, xoff, yoff); 
  currentSecond = second(); 
  // print(currentSecond);

  if (currentSecond%2 == 0){
    // print('we are here'); 
    newchange = changeText(); 
    text(newchange, x, y);
  }
}

function changeSound(freq, vol){
  // console.log(freq, vol); 
  osc.frequency.value = freq; 
  osc.volume.value = vol; 
}

function changeText(){
  let newWord = int(random()*words.length); 
  // let newWord = random(words.length);
  let word = words[newWord];
  return word; 
}