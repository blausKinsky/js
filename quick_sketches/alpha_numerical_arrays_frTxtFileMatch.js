const alpha = ['a', 'b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','P'];
let wordTotal = 0; 
let result;
let pairs = [];
let words = [];
let uniquePairs = {};

function preload() {
  result = loadStrings('assets/artistStatements.txt');
}

let word = 'fudge';
// console.log('the word total for ', word, 'is ', wordToNumber(word,alpha));
let phrase = 'the rain in spain is mostly on the plane';

// console.log(wordToNumber(word,alpha));
let testArray = ['and','but' , 'other'];


function setup() {
	createCanvas(600,600);
    background(200);

    // console.log(result[0]);
    for(w=0;w<6;w++){
      let splitTest = split(result[w],' ');
      // console.log(splitTest);
      for(j=0;j<splitTest.length; j++){
        // console.log('in the first loop, the j is ', j, splitTest[j]);

        let lwrC = splitTest[j].toLowerCase();
        if (words.indexOf(splitTest[j])>=0){
            console.log('do nothing'); 
        }else{
          let theWnum = wordToNumber(lwrC,alpha);
          words.push(splitTest[j]); 
          // pairs.push([splitTest[j],theWnum]); 
          if(Object.keys(uniquePairs).includes(theWnum.toString())){
            uniquePairs[theWnum.toString()].push(splitTest[j]); 
          }else{
            uniquePairs[theWnum.toString()] = [splitTest[j]];//this makes uniquePairs an object filled with arrays 
          }
        }

    }
    // console.log('this is the test ', pairs.includes(['and'])); 
    console.log(uniquePairs);
    //https://stackoverflow.com/questions/21012580/is-it-possible-to-write-data-to-file-using-only-javascript
    }

    for(z=0;z<pairs.length;z++){
      // console.log(pairs[z]);
    }
    console.log('the length of pairs is ', pairs.length, pairs);
    //search by number by turning it into a string
    console.log('number 15 is ', uniquePairs['15'])
}

function wordToNumber (word, arr){
  wordTotal = 0; 
	for(i=0;i<word.length;i++){
  	ltrIndex = arr.indexOf(word[i])+1;//+1 so that the array counts from 1 for a, not 0
  	wordTotal = wordTotal +ltrIndex;
  	// console.log(i, word[i], ltrIndex, wordTotal);
	}
  return wordTotal;
}