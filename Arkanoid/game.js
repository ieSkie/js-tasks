const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const W = canvas.width;
const H = canvas.height;

const paddle = {
  width: 400,
  height: 12,
  x: W / 2 - 40,
  y: H - 30,
  speed: 4,
  movingLeft: false,
  movingRight: false,
};

const ball = {
  radius: 5,
  x: W / 2,
  y: H - 40,
  speedX: 3,
  speedY: -3,
};

const ROWS = 6;
const COLS = 10;
const BRICK_W = 46;
const BRICK_H = 18;
const BRICK_GAP = 2;
const BRICK_TOP = 50;

const ROW_COLORS = [
  "#9d9d9d",
  "#e74c3c",
  "#3498db",
  "#e67e22",
  "#ff69b4",
  "#2ecc71",
];

class Brick {
  constructor(row, col) {
    this.x = 1 + col * (BRICK_W + BRICK_GAP);
    this.y = BRICK_TOP + row * (BRICK_H + BRICK_GAP);
    this.alive = true;
    this.color = ROW_COLORS[row];
  }

  draw() {
    if (!this.alive) return;
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, BRICK_W, BRICK_H);
  }
}

const bricks = [];
for (let row = 0; row < ROWS; row++) {
  for (let col = 0; col < COLS; col++) {
    bricks.push(new Brick(row, col));
  }
}

const overlay = document.getElementById("overlay");
const counter = document.getElementById("score");

let isGameOver = false;
let score = 0;

function draw() {
  if (isGameOver) return;
  // Игровое поле
  ctx.fillStyle = "#00008b";
  ctx.fillRect(0, 0, W, H);

  // Платформа
  ctx.fillStyle = "#e74c3c";
  ctx.fillRect(paddle.x, paddle.y, paddle.width, paddle.height);

  // Мяч
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
  ctx.fillStyle = "white";
  ctx.fill();

  // Кирпичики
  bricks.forEach((brick) => brick.draw());
}

function update() {
  if (isGameOver) return;
  if (paddle.movingLeft) paddle.x -= paddle.speed;
  if (paddle.movingRight) paddle.x += paddle.speed;

  if (paddle.x < 0) paddle.x = 0;
  if (paddle.x + paddle.width > W) paddle.x = W - paddle.width;

  ball.x += ball.speedX;
  ball.y += ball.speedY;

  if (ball.x - ball.radius < 0 || ball.x + ball.radius > W) {
    ball.speedX = -ball.speedX;
  }

  if (ball.y - ball.radius < 0) {
    ball.speedY = -ball.speedY;
  }

  if (
    ball.y + ball.radius >= paddle.y &&
    ball.y + ball.radius <= paddle.y + paddle.height &&
    ball.x + ball.radius >= paddle.x &&
    ball.x - ball.radius <= paddle.x + paddle.width
  ) {
    ball.speedY = -Math.abs(ball.speedY);
    ball.y = paddle.y - ball.radius;
  }

  if (ball.y > H) {
    isGameOver = true;
    overlay.style.display = "flex";
  }

  bricks.forEach((brick) => {
    if (!brick.alive) return;

    if (
      ball.x + ball.radius >= brick.x &&
      ball.x - ball.radius <= brick.x + BRICK_W &&
      ball.y + ball.radius >= brick.y &&
      ball.y - ball.radius <= brick.y + BRICK_H
    ) {
      brick.alive = false;
      score++;
      counter.textContent = score;
      if (checkWin()) {
        document.getElementById("overlayText").textContent = "YOU WIN";
        const btn = document.getElementById("restartBtn");
        btn.textContent = "Next level";
        btn.onclick = () =>
          (window.location.href =
            "https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=RDdQw4w9WgXcQ&t=43s");
        overlay.style.display = "flex";
        isGameOver = true;
      }
      ball.speedY = -ball.speedY;
    }
  });
}

function resetGame() {
  ball.x = W / 2;
  ball.y = H - 50;
  ball.speedX = 3;
  ball.speedY = -3;
  paddle.x = W / 2 - 40;
  bricks.forEach((brick) => (brick.alive = true));
  score = 0;
  counter.textContent = score;
  const btn = document.getElementById("restartBtn");
  btn.textContent = "Заново";
  btn.onclick = null;
  isGameOver = false;
  overlay.style.display = "none";
}

function gameLoop() {
  update();
  draw();
  requestAnimationFrame(gameLoop);
}

function checkWin() {
  return bricks.every((brick) => !brick.alive);
}

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft" || e.key === "a") paddle.movingLeft = true;
  if (e.key === "ArrowRight" || e.key == "d") paddle.movingRight = true;
});

document.addEventListener("keyup", (e) => {
  if (e.key === "ArrowLeft" || e.key === "a") paddle.movingLeft = false;
  if (e.key === "ArrowRight" || e.key == "d") paddle.movingRight = false;
});
document.getElementById("restartBtn").addEventListener("click", resetGame);

requestAnimationFrame(gameLoop);
