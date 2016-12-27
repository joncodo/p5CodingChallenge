function Drop() {
  this.x = random(width);
  this.y = random(-700, 0);
  this.ySpeed = random(3,10);
  this.length = random(2,10);

  this.show = function() {
    stroke(255);
    line(this.x, this.y, this.x, this.y + this.length);
  };

  this.fall = function() {
    this.y += this.ySpeed;
    if (this.y > height) {
      this.y = random(-500, 0);
    }
  };
}
