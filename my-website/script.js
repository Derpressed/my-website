
const snakeBody = document.getElementById("snake-head");
const boundaryDiv = document.getElementById("inner-div");
const timerText = document.getElementById("timer");
const button = document.getElementById("testButton");

const food = document.querySelector(".food");

const snakeHead = new Snake(snakeBody);


let foodArr = [];

let pixels = 10;
let points = 0;

// (0 = up) (1 = down) (2 = left) (3 = right)
let dir = 1;

// (0 = false)
let running = 0;

let counter = 0;

function keyPressed(event) {
  let key = event.key.toLowerCase();
  
  if (key == "w") {
    snakeHead.changeDir("up");
  } else if (key == "s") {
    snakeHead.changeDir("down");
  } else if (key == "a") {
    snakeHead.changeDir("left");
  } else if (key == "d") {
    snakeHead.changeDir("right");
  }
  const snakePos =  snakeBody.getBoundingClientRect();
}

function gameRun() {
  snakeHead.move();
  snakeHead.foodCollision(foodArr);
  timerText.textContent = points;
  if (snakeHead.snakeCollision()) {
    running = 0;
    button.textContent = "start";
    timerText.textContent = "0";
    snakeHead.reset();
    points = 0;
  }
  points += 1;
}

document.addEventListener("keypress", keyPressed);
button.addEventListener("click", () => {
  if (running == 0) {
    running = 1;
    button.textContent = "reset";
  

  } else if (running == 1) {
    running = 0;
    button.textContent = "start";
    timerText.textContent = "0";

    snakeHead.reset();

    points = 0;
  }
});



setInterval(() => {
  if (running == 1) {
    gameRun();

    // this makes it so that counter resets at the 11th * 100ms (1.10s)
    if (counter == 11) {
      counter = 0;
      foodArr.push(Food.addFood());
    }
    console.log(foodArr);
    counter++;
  }
}, 100);
