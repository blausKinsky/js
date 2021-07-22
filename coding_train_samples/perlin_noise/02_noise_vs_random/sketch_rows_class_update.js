
//can i use for loops to declare global variables?
let xoff1 = 0;
let xoff2 = 10000;
let xoff3 = 20000;
let xoff4 = 50000;
let xoff5 = 75000;
let xoff6 = 30000;
let inc = 0.01; //the speed of the movement
let words = ['max', 'min', 'fat', 'thin', 'one', 'two', 'zero', 'yes', 'no'];
let newchange = [];
let numOfElements = 6;
let xoff = [0, 5000, 10000,13500, 15000, 2500];
let v = '';
let x = [];
// let y = [];
let yoff = 60;
let y =[60,120,180,240,300,360];
let [y1, y2, y3, y4, y5, y6] =[0,0,0,0,0,0,];
// let onOff = false;
let [x1,x2,x3,x4,x5,x6] = [0,0,0,0,0,0,];
let hasHit = false;
let lastChange = 0;
//this array exists to be shuffled
let randomIndices = [0,1,2,3,4,5, 6, 7, 8];


function setup() {
  createCanvas(400, 400);
  frameRate(60);


  }


function draw() {
  background(51);
  fill(255);
  textSize(24);

  for (i = 0; i <numOfElements; i++){
    xoff[i] += inc;
    x[i] = map(noise(xoff[i]), 0, 1, 0, width)
    //the magic happens below
    text(words[randomIndices[i]], x[i], y[i]);
    console.log('i is ', i);
    // text(v, x[i], y[i]);

  }

  currentSecond = second();


  if (currentSecond%2 == 0 && !hasHit){
    let v = changeText();
    console.log('v equals ',v);
    // we want this to 'permanently' - or at least until the next loop -
    // change the word we're getting in the prior loop.
    // so let's make a function that does that
    // (we could even just do this with the words array, but this feels safer)
    shuffleArray(randomIndices)
    // text(words[v], x[i], y[i]);
    // text(words[two], x2, y2);
    // text(words[three], x3, y3);
    // text(words[four], x4, y4);
    // text(words[five], x5, y5);
    // text(words[six], x6, y6);
    hasHit = true;
    lastChange = currentSecond;
  }

  if (currentSecond>lastChange){
    hasHit = false;
  }
  // console.log('i is ', i);
  // text(v, x[i], y[i]);
}

function shuffleArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

function changeText(){
  // let newWord = random(words);
  let newWord = int(random()*words.length);
  let word = words[newWord];
  console.log(newWord, word);
  return word;

}
