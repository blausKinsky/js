  hasHit = false; 
  lastChange = 0; 

  currentSecond = second(); 
  milliSecond = millis();
  // noloop(); 

  if (currentSecond%2 == 0 && !hasHit){
    //do something here

    // one = int(random()*words.length);
    // text(words[one], x1, y1);

    hasHit = true; 
    lastChange = currentSecond; 
  }

  if (currentSecond>lastChange){
    hasHit = false; 
  }
