var snake;
var food;

function setup() {
  createCanvas(500, 500);
  snake = new Snake();
  food = new Food();
  frameRate(10);
  food.randomFoodLocation();
}


function draw() {
  background(51);
  if (snake.eat(food)) {
    food.randomFoodLocation();
  }
  snake.update();
  snake.show();

  food.show();
}

function keyPressed() {
  if (keyCode == UP_ARROW) {
    snake.dir(0, -1);
  } else if (keyCode == DOWN_ARROW) {
    snake.dir(0,1);
  } else if (keyCode == RIGHT_ARROW) {
    snake.dir(1,0);
  } else if (keyCode == LEFT_ARROW) {
    snake.dir(-1,0);
  }
}
