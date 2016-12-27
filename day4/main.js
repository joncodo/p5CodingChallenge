// Thunder flash
//Lightning
//thunder sounds and echo


var numberOfDrops = 500;
var drops = [];
var thunder;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (var i = 0; i < 100; i++) {
    drops[i] = new Drop();
  }
  thunder = new Thunder();
}


function draw() {
  background(thunder.bgColor());

  for (var i = 0; i < 100; i++) {
    drops[i].show();
    drops[i].fall();
  }
}
