var stars = [];
var speed = 10;

function setup() {
  createCanvas(700, 700);

  for (var i = 0; i < 1000; i++) {
    stars.push(new Star());
  }
}

function draw() {
  speed = map(mouseX, 0, width, 1, 15)
  background(51);
  translate(width/2, height/2);
  stars.forEach(function (star) {
    star.update();
    star.show();
  })
}


function Star (){
  this.x = random(-width, width);
  this.y = random(-height, height);
  this.z = random(width);
  this.color = [random(255), random(255), random(255)]

  this.update = function update() {
    this.z = this.z - speed;
    if(this.z < 1){
      this.x = random(-width, width);
      this.y = random(-height, height);
      this.z = random(width);
    }
  }

  this.show = function show() {
    var sx = map(this.x / this.z, 0, 1, 0, width);
    var sy = map(this.y / this.z, 0, 1, 0, width);

    fill(this.color);
    noStroke()
    var r = map(this.z, 0, width, 16 , 0)
    ellipse(sx, sy, r,r)
  }
}
