let alpha = ['a', 'b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','P'];
let sortedKeys = [0, 1, 4, 5, 7, 9, 10, 12, 13, 14, 15, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205, 206, 207, 209, 211, 212, 213, 214, 216, 218, 220, 221, 224, 227, 229, 234, 235, 236, 237, 238, 246, 249, 253, 264, 268]

let wordTotal = 0; 
let result;
let shortWords =[]
let medWords = []
let longWords = []
let xlWords = []

function preload() {
  result = loadStrings('assets/artistStatements.txt');
  up = loadJSON('assets/unique_pairs.json');
  // cp = loadJSON('assets/compoundPhrases.json');
}

function setup() {
	createCanvas(windowWidth,windowHeight);
  background(200);
  shortWords = sortedKeys.slice(1,40)
  medWords = sortedKeys.slice(40,90)
  longWords = sortedKeys.slice(90,140)
  xlWords = sortedKeys.slice(140,221)
  console.log(sortedKeys.length)

}

function draw(){
  printWords();
  noLoop();
}
//create a function that prints the text, it has different font sizes for some words, Caps, medium for most small for others
//in the draw make a timer that generates stateements every n seconds
function printWords(){
  sWords()
  mediumWords()
  lWords()
  extraLargeW()
  lWords()
  extraLargeW()

}
function sWords(){
  fill(0)
  textSize(24)
  let wOne = floor(random(shortWords))
  console.log('first wOne is ', wOne)
  let k1 = up[wOne].length
  wOne = str(wOne)
  console.log('k1 is ', k1, 'str version is ', wOne)
  if (k1>0){
    text(up[wOne][floor(random(k1))], random(width)- 100, random(30+height)-100)
  }else{
    text(up[wOne], random(width-100), random((30+height))-100)
  }
}

function mediumWords(){
  fill(0)
  textSize(24)
  let wTwo = floor(random(shortWords))
  let k2 = up[wTwo].length
  wTwo = str(wTwo)
  if (k2>0){
    text(up[wTwo][floor(random(k2))], random(width-100), random((30+height))-100)
  }else{
    text(up[wTwo], random(width-100), random((30+height)-100))
  }
}

function lWords(){
  fill(0)
  textSize(24)
  let wThree = floor(random(shortWords))
  let k3 = up[wThree].length
  wThree = str(wThree)
  if (k3>0){
    text(up[wThree][floor(random(k3))], random(width-100), random((30+height)-100))
  }else{
    text(up[wThree], random(width-100), random((30+height)-100))
  }
}

function extraLargeW(){
  fill(0)
  textSize(24)
  let wFour = floor(random(shortWords))
  let k4 = up[wFour].length
  wFour = str(wFour)
  if (k4>0){
    text(up[wFour][floor(random(k4))], random(width-100), random((30+height)-100))
  }else{
    text(up[wFour], random(width-100), random((30+height)-100))
  }
}

