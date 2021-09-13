function change(){
    let input = document.getElementById("check")
    if (input.getAttribute('value') === 'false') {
      document.getElementById('check').style.backgroundColor = 'Green'; 
      document.getElementById('check').innerHTML = 'half-step on';
      input.setAttribute('value','true')
      console.log(input); 
 
      // console.log('change button sound was off now its on - green ',  sound)

    } else {
      // console.log("other")
      document.getElementById('check').style.backgroundColor = 'Red'; 
      document.getElementById('check').innerHTML = 'half-step off';
      input.setAttribute('value','false')
      console.log(input); 

    }
}

// if you want the script to not involve an html element, these are two examples
let val = 'true'; 
function simpleSwitch(){
	if(val == 'true'){
		val = 'false';
		console.log('if val ', val); 
	} else{
		val = 'true'; 
		console.log('else val ', val); 
	}
}

let sVal = true; 
function booSwitch(){
	if(sVal == true){
		sVal = false;
		t = typeof(sVal); 
		console.log('if val ', sVal, t); 
	} else{
		sVal = true; 
		console.log('else val ', sVal); 
	}
}