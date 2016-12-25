//This code does not really work as intended since the p5js library does not support it yet.

//https://github.com/processing/p5.js/issues/1720

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
