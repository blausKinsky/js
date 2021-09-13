let alpha = ['a', 'b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let wordTotal = 0; 
// let theTotal;

let word = 'fudge';
// console.log('the word total for ', word, 'is ', wordToNumber(word,alpha));
let phrase = 'the rain in spain is mostly on the plane';
// phrase = phrase.split(' '); 

// console.log('the words in the sentence are ', wordsInSentence(phrase));

// function wordsInSentence(sentence){
// 	wis = sentence.split(' '); 
// 	console.log('the words in wis are ', wis);
// 	for (j=0;j<wis.length;j++){
// 		console.log(wordToNumber(wis[j],alpha));
// 		// console.log('the ', j, 'word in the sentence is ', wis[j], 'the phrase has this many words ', wis.lenght);
// 		// return(wordToNumber(wis[j],alpha));
// 	// theTotal = wordToNumber(phrase[i],alpha); 
// 	// console.log('the total is ', wordToNumber(phrase[i],alpha));
// 	}
// }
console.log(wordToNumber(word,alpha));

function wordToNumber (word, arr){
	for(i=0;i<word.length;i++){
	ltrIndex = arr.indexOf(word[i])+1;//+1 so that the array counts from 1 for a, not 0
	wordTotal = wordTotal +ltrIndex;
	console.log(i, word[i], ltrIndex);
	}
  return wordTotal;
}