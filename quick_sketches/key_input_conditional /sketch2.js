let word = ''; 


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

function myInputEvent() {
  background('grey');
  word = this.value(); 
  console.log(typeof(word));
  console.log('you are typing: ', this.value());
  if (word == 'y' || word == 'Y'){
    text('G.O.A.T! G.O.A.T! G.O.A.T! G.O.A.T! G.O.A.T! G.O.A.T!', 100, 580);
  }
  else if(word == 'n' || word == 'N'){
    text('Are you sure? You must be mistaken', 100, 580);
  }
  else{
    text("Dear Human, don't waste my time", 100, 580); 
    }
 text('Y or N - Genshin Impact is the greatest game of all time?', 100, 450);
}



