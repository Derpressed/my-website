const snakeBody = document.getElementById("snakeBody");
const boundaryDiv = document.getElementById("inner-div");
const timerText = document.getElementById("timer");
const button = document.getElementById("testButton");

let x = 0;
let y = 0;

let pixels = 10;
let points = 0;

// (0 = up) (1 = down) (2 = left) (3 = right)
let dir = 1;

function keyPressed(event) {
  let key = event.key.toLowerCase();
  
  if (key == "w") {
    dir = 0;
  } else if (key == "s") {
    dir = 1;
  } else if (key == "a") {
    dir = 2;
  } else if (key == "d") {
    dir = 3;
  }

  const snakePos =  snakeBody.getBoundingClientRect();
}

document.addEventListener("keypress", keyPressed);
button.addEventListener("click", () => {
  y = 0;
  x = 0;

  snakeBody.style.left = 0;
  snakeBody.style.top = 0;
  
  dir = 1;

  points = 0;
});

setInterval(() => {
  
  if (dir == 0) {
    y -= pixels;

    if ((y) <= 0) {
      y = (boundaryDiv.clientHeight - snakeBody.offsetHeight);
    }

    snakeBody.style.top = y + "px";
  } else if (dir == 1) {
    y += pixels;

    if ((y + snakeBody.offsetHeight) >= boundaryDiv.clientHeight) {
      y = 0;
    }

    snakeBody.style.top = y + "px";
  } else if (dir == 2) {
    x -= pixels;

    if (x <= 0) {
      x = (boundaryDiv.clientWidth - snakeBody.offsetWidth);
    }

    snakeBody.style.left = x + "px";
  } else if (dir == 3) {
    x += pixels;

    if ((x + snakeBody.offsetWidth) >= boundaryDiv.clientWidth) {
      x = 0;
    }

    snakeBody.style.left = x + "px";
  }

  timerText.textContent = points;
  points += 1;
}, 100); 
