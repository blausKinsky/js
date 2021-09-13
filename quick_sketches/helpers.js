function wordToNumber (word, arr){
	for(i=0;i<word.length;i++){
	ltrIndex = arr.indexOf(word[i])+1;//+1 so that the array counts from 1 for a, not 0
	wordTotal = wordTotal +ltrIndex;
	console.log(i, word[i], ltrIndex);
	}
  return wordTotal;
}