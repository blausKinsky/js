let myCircle;

function setup() {
  createCanvas(300, 300);

  myCircle = {
     x: 150, 
     y: 100, 
     size: 50,
     display: function() {
       circle(this.x, this.y, this.size);
     }
    };
}

function draw() {
  background(50);

  myCircle.display();
}