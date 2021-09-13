// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/BjoM9oKOAKY

class Particle {
  constructor() {
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.maxspeed = 4;
    this.prevPos = this.pos.copy();
  }

  update() {
    this.vel.add(this.acc);
    this.vel.limit(this.maxspeed);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  follow(vectors) {
    var x = floor(this.pos.x / scl);
    var y = floor(this.pos.y / scl);
    var index = x + y * cols;
    var force = vectors[index];
    this.applyForce(force);
  }

  applyForce(force) {
    this.acc.add(force);
  }

  show() {
    stroke(255, 10);
    strokeWeight(1);
    line(this.pos.x, this.pos.y, sin(this.prevPos.x), cos(this.prevPos.y));
    this.updatePrev();
  }

  updatePrev() {
    this.prevPos.x = sin(this.pos.x);
    this.prevPos.y = cos(this.pos.y);
  }

  edges() {
    if (this.pos.x > width) {
      this.pos.x = sin(0);
      this.updatePrev();
    }
    if (this.pos.x < 0) {
      this.pos.x = sin(width);
      this.updatePrev();
    }
    if (this.pos.y > height) {
      this.pos.y = cos(0);
      this.updatePrev();
    }
    if (this.pos.y < 0) {
      this.pos.y = cos(height);
      this.updatePrev();
    }

  }

}