var stars = [];
var speed = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);

  //create 1000 stars
  for (var i = 0; i < 1000; i++) {
    stars.push(new Star());
  }
}

function draw() {
  speed = map(mouseX, 0, width, 1, 30);
  background(51);

  //start drawing from the center of the screen
  translate(width / 2, height / 2);
  stars.forEach(function (star) {
    star.update();
    star.show();
  });
}
