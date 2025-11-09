const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let box = 20;
let snake = [{x: 9*box, y: 9*box}];
let direction;
let food = {
  x: Math.floor(Math.random()*19)*box,
  y: Math.floor(Math.random()*19)*box
};

document.addEventListener("keydown", e => {
  if (e.keyCode === 37 && direction !== "RIGHT") direction = "LEFT";
  else if (e.keyCode === 38 && direction !== "DOWN") direction = "UP";
  else if (e.keyCode === 39 && direction !== "LEFT") direction = "RIGHT";
  else if (e.keyCode === 40 && direction !== "UP") direction = "DOWN";
});

function draw() {
  ctx.fillStyle = "#111";
  ctx.fillRect(0, 0, 400, 400);
  for (let i = 0; i < snake.length; i++) {
    ctx.fillStyle = i === 0 ? "lime" : "green";
    ctx.fillRect(snake[i].x, snake[i].y, box, box);
  }
  ctx.fillStyle = "red";
  ctx.fillRect(food.x, food.y, box, box);

  let snakeX = snake[0].x;
  let snakeY = snake[0].y;

  if (direction === "LEFT") snakeX -= box;
  if (direction === "UP") snakeY -= box;
  if (direction === "RIGHT") snakeX += box;
  if (direction === "DOWN") snakeY += box;

  if (snakeX === food.x && snakeY === food.y) {
    food = {
      x: Math.floor(Math.random()*19)*box,
      y: Math.floor(Math.random()*19)*box
    };
  } else {
    snake.pop();
  }

  const newHead = {x: snakeX, y: snakeY};

  if (snakeX < 0 || snakeY < 0 || snakeX >= 400 || snakeY >= 400 || collision(newHead, snake)) {
    clearInterval(game);
    alert("Game Over!");
  }

  snake.unshift(newHead);
}

function collision(head, array) {
  return array.some(segment => segment.x === head.x && segment.y === head.y);
}

let game = setInterval(draw, 100);
