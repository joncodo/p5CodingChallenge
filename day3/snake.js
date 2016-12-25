var speed = 25;

function Snake() {
  this.x = 0;
  this.y = 0;
  this.xSpeed = 1;
  this.ySpeed = 0;
  this.total = 1;
  this.tail = [];

  this.update = function() {
    this.x += this.xSpeed * speed;
    this.y += this.ySpeed * speed;

    this.x = constrain(this.x, 0, width - speed);
    this.y = constrain(this.y, 0, height - speed);
  };

  this.show = function() {
    fill(255);
    noStroke();
    rect(this.x, this.y, speed, speed);
  };

  this.dir = function(x,y) {
    this.xSpeed = x;
    this.ySpeed = y;
  };

  this.eat = function(food) {
    var d = dist(this.x, this.y, food.x, food,y);
    if (d < 1) {
      this.total += 1;
      return true;
    } else {
      return false;
    }
  };
}
