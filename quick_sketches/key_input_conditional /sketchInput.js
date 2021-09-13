let word = ''; 


function myFunction() {
  let resp = document.getElementById("response").value;
  console.log(resp);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background('grey');
  fill(255, 127, 255);
  textSize(36);
  text('Y or N - Genshin Impact is the greatest game of all time?', 100, 450);
  let inp = createInput('');
  inp.position(110, 500);
  inp.size(180);
  inp.id('response');
}

function submitEvent() {
  background('grey');
  word = document.getElementById("response").value;
  console.log(word);

  if (word == 'yes' || word == 'Yes' || word == 'YES' || word == 'YES!'){
    text('G.O.A.T! G.O.A.T! G.O.A.T! G.O.A.T! G.O.A.T! G.O.A.T!', 100, 580);
  }
  else if(word == 'no'){

  // else if(word == 'no' || word == 'No' || word == 'NO' || word = 'NO!'){
    text('Are you sure? You must be mistaken', 100, 580);
  }
  else{
    text("Dear Human, don't waste my time", 100, 580); 
    }
text('Y or N - Genshin Impact is the greatest game of all time?', 100, 450);
}



