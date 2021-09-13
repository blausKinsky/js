let word = ''; 
let phrase = [];
let letter = '';


function setup() {
  createCanvas(windowWidth, windowHeight);
  background('grey');
  fill(255, 127, 255);
  textSize(36);
  text('Y or N - Genshin Impact is the greatest game of all time?', 100, 450);
  let inp = createInput('');
  inp.position(110, 500);
  inp.size(180);
  inp.input(myInputEvent);

}

function draw(){


}

  // function keyPressed() {
  // if (keyCode === RETURN) {
  //   console.log('the test is hit');
  //   testWord(word);
  //   }
  // }


  function myInputEvent() {
    letter = this.value(); 
    phrase.push(letter);
    word = join(phrase);
    console.log('you are typing: ', this.value(), 'the word is ', word);


}



function testWord(word){
        if (word == 'yes' || word == 'Yes'){
        text('G.O.A.T! G.O.A.T! G.O.A.T! G.O.A.T! G.O.A.T! G.O.A.T!', 100, 580);
        }
        if(word == 'no' || word == 'No'){
        text('Are you sure? You must be mistaken', 100, 580);
        }
}





