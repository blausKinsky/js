let xPosUp1 = 1000
let xPosUp2 = 500
let xPosLo1 = 750
let xPosLo2 = 250
let decLo1 = 1.2
let decLo2 = 1.3
let decUp1 = 1.2
let decUp2 = 1.3
let upperText = ['Thin Film Monarchy','Destruction of Systole','Exploitations of memory invented','3rd Dynasty of Bicuspid rule', 'Alternating Dynasty','Middle Prolapse','Tin Foil Empire', 'The Pulsing Incursions','Fall of Polarizing Cognates', 'Infective Empire', 'Net Positive Rule','Revolt of Chrononormativity', 'Early Dynastic Transmission Systems']
let upperText2 = ['Slot Machine Advances', 'Annotated Sundial', 'Lolligagging resurgence','The Sweaty Hands']
let lowerText = ['That moment Before Sleep', 'Paper Routes', 'Furtive Praying','Judgement Day Hand-Grenade','The Sunsets', 'Surprise Turns', 'Vodka with Elders','Riding Over Bridges']
let lowerText2 = ['The Sweaty Hands', 'Minor Flaws Found','That Report on Deep Cuts', 'Microtonal Anthem','Granular Data Breach','Future Sink Hole']
let text1up ='A place for slacks'
let text2up = 'Strike of the Long Faces'
let text1lo = 'Condensator rebellion'
let text2lo = 'Veiled Subtext'
let img1
let img2
let img3
let img = []
let imgCh 
function preload(){
	img1 = loadImage('assets/img0.png')
	img2 = loadImage('assets/img1.png')
	img3 = loadImage('assets/img2.png')

	// for (var i = 1; i< 4; i++) {
	// 	let m = i.toString()
	// 	img+m
	// 	img+m = loadImage('assets/img' + m + '.png');
 //  }


}

function setup(){
	createCanvas(1000,562)
	background(255)
	// img.push(img1)
	// img.push(img2)
	// img.push(img3)
	// console.log('the image array is ', img)
	img = [img1,img2,img3]
	imgCh = img3

	// img = [img1,img2,img3]
}

function draw(){
	background(255);
	stroke(0)
	strokeWeight(2)
	//timelines
	line(0,height/3,width, height/3)
	line(0,2*(height/3), width, 2*(height/3))
	fill(0)
	textSize(20)
	text(text1up, xPosUp1, (height/3)-30)
	line(xPosUp1+4,height/3,xPosUp1+4,(height/3)-25)
	image(imgCh, xPosUp2-25, (height/3)-80,[65],[65])
	line(xPosUp2+4,height/3,xPosUp2+4,(height/3)-25)

	// text(text2up, xPosUp2, (height/3)-30)

	if(xPosUp1<0){
		xPosUp1 = width
		text1up = random(upperText)
		decLo1 = random(1.2,1.3)
		imgCh = random(img)
		// console.log('imgCh is ', imgCh)
	}

	if(xPosUp2<0){
	xPosUp2 = width
	text2up = random(upperText2)
	decLo2 = random(1.2,1.3)
	}
	xPosUp1 -= decLo1
	xPosUp2 -= decLo2

	if(xPosLo1<0){
		xPosLo1 = width
		text1lo = random(lowerText)
		decLo1 = random(1.2,1.3)
	}
	xPosLo1 -= decLo1
	text(text1lo, xPosLo1, 2*(height/3)-30)
	line(xPosLo1+4,2*(height/3),xPosLo1+4,2*(height/3)-25)

	if(xPosLo2<0){
		xPosLo2 = width
		text2lo = random(lowerText2)
		decLo2 = random(1.2,1.3)
	}
	xPosLo2 -= decLo2
	text(text2lo, xPosLo2, 2*(height/3)-30)
	line(xPosLo2+4,2*(height/3),xPosLo2+4,2*(height/3)-25)	
}