let alpha = ['a', 'b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','P'];
let wordTotal = 0; 
let result;

function preload() {
  result = loadStrings('assets/artistStatements.txt');
}

let word = 'fudge';
// console.log('the word total for ', word, 'is ', wordToNumber(word,alpha));
let phrase = 'the rain in spain is mostly on the plane';

// console.log(wordToNumber(word,alpha));

function setup() {
	createCanvas(600,600);
    background(200);
    // text(random(result), 10, 10, 80, 80);

    text(result[4], 10, 10, width-10, height-400);
    // let splitTest = result[4].split();

    let splitTest = split(result[4],' ');
    let sliceEx = splitTest.slice(0,6);
    let fudge = sliceEx.join(' ')
    text(splitTest, 10, 250, width-10,height);
    text(sliceEx, 10, 500);

    // let w2n = wordToNumber(splitTest[5],alpha);
    // console.log('the total for the word is ', w2n);
    // text(w2n, 10,380);
    // text(splitTest[5], 10,350, width-10, height-10);
    console.log(sliceEx.length, sliceEx);

    for(j=0;j<splitTest.length; j++){
      console.log('in the first loop, the j is ', j, splitTest[j]);
      let lwrC = splitTest[j].toLowerCase();
      let theWnum = wordToNumber(lwrC,alpha);
    	console.log('the word number', j, ' is ', theWnum, 'the wordTotal is ', wordTotal);
      //formerly, the for loop here had an i, and it only ran once, when i changed it to j, it worked
      //was the i being sent into the wordToNumber function? 
    }

}

function wordToNumber (word, arr){
  wordTotal = 0; 
	for(i=0;i<word.length;i++){
  	ltrIndex = arr.indexOf(word[i])+1;//+1 so that the array counts from 1 for a, not 0
  	wordTotal = wordTotal +ltrIndex;
  	console.log(i, word[i], ltrIndex, wordTotal);
	}
  return wordTotal;
}