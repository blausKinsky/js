
		let result;
		function preload() {
		  result = loadStrings('assets/artistStatements.txt');
		}

		function setup() {
			createCanvas(400,400);
		    background(200);
		    // text(random(result), 10, 10, 80, 80);

		    text(result[4], 10, 50, width-10, height-100);
		    // let splitTest = result[4].split();

		    let splitTest = split(result[4],' ');
		    let splitTokenTest = splitTokens(result[4], ' ');
		    let spliceEx = splitTest.slice(0,6);
		    let fudge = spliceEx.join(' ')
		    console.log(typeof splitTest, typeof splitTokenTest);
		    text(splitTest[5], 10,360, width-10, height-10);
		    text(splitTokenTest[5],10,385);
		    text(spliceEx,10,300);
		    text(fudge,10,330);

		    //it is breaking on the paragraph not word. 
		    //what is the difference between split and splitToken? 
		    //could I do splice and join in a single step? 
		}