var a = 0;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  translate(width / 2, height / 2);
}

function draw() {
  background(51);

  rotateX(a);
  rotateY(a);
  a += 0.01;

  fill(0,255,0);
  stroke(255,0,0);

  box(192);
}
