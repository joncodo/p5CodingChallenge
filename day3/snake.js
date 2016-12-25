var speed = 25;

function Snake() {
  this.x = 0;
  this.y = 0;
  this.xSpeed = 1;
  this.ySpeed = 0;
  this.tail = [ {x:0,y:0} ];

  this.update = function() {
    this.x += this.xSpeed * speed;
    this.y += this.ySpeed * speed;

    this.x = constrain(this.x, 0, width - speed);
    this.y = constrain(this.y, 0, height - speed);

    //push new pos to front of array
    this.tail.unshift({x: this.x, y: this.y});
    //remove last array element
    this.tail.pop();
  };

  this.show = function() {
    fill(255);
    noStroke();

    //Draw Snake
    for (var i = 0; i < this.tail.length; i++) {
      rect(this.tail[i].x, this.tail[i].y, speed, speed);
    }
  };

  this.dir = function(x,y) {
    //set direction based on keypress
    this.xSpeed = x;
    this.ySpeed = y;
  };

  this.eat = function(food) {
    //Did you collide with the food?
    var d = dist(this.x, this.y, food.x, food.y);
    if (d < 1) {
      //Add to the snake tail when you eat food
      this.tail.unshift({x: this.x, y: this.y});
      this.total += 1;
      return true;
    } else {
      return false;
    }
  };
}
