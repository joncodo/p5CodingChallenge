var maxSize = 32;

function Star() {
  this.init = function() {
    this.x = random(-width, width);
    this.y = random(-height, height);
    this.z = random(width);
  };

  this.init();
  this.color = [random(255), random(255), random(255)];

  this.update = function update() {
    this.z = this.z - speed;

    //reset if it goes offscreen
    if (this.z < 1) {
      this.init();
    }
  };

  this.show = function show() {
    // map: take a value and turn it into another value. Each value you work with has a rango of valid numbers
    // Example: Take the color of a dot that is randomly assigned between 0,255 and map it to a new number between 0,100
    // map(color, 0, 255, 0, 100)
    // map(value to change, valid min value, valid max value, new range min value, new range max value)
    var sx = map(this.x / this.z, 0, 1, 0, width);
    var sy = map(this.y / this.z, 0, 1, 0, width);

    fill(this.color);
    noStroke();
    var radius = map(this.z, 0, width, maxSize, 0);
    ellipse(sx, sy, radius, radius);
  };
}
