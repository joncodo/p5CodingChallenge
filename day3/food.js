function Food() {
  this.show = function() {
    fill(255, 0, 0);
    noStroke();
    rect(this.x, this.y, speed, speed);
  };

  this.randomFoodLocation = function() {
    var rows = floor(width / speed);
    var cols = floor(height / speed);

    this.x = floor(random(rows)) * speed;
    this.y = floor(random(cols)) * speed;
  };

  this.randomFoodLocation();
}
