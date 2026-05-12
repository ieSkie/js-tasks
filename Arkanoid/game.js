const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const W = canvas.width;
const H = canvas.height;

const paddle = {
  width: 80,
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

const paddleBooster = {
  width: 30,
  height: 10,
  x: -100,
  y: -100,
  speed: 2,
  isActive: false,
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
let highScore = sessionStorage.getItem("highScore") || 0;
let boosterTimer = null;

document.getElementById("highScore").textContent = highScore;

function draw() {
  ctx.fillStyle = "#00008b";
  ctx.fillRect(0, 0, W, H);

  ctx.fillStyle = "#e74c3c";
  ctx.fillRect(paddle.x, paddle.y, paddle.width, paddle.height);

  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
  ctx.fillStyle = "white";
  ctx.fill();

  bricks.forEach((brick) => brick.draw());

  if (paddleBooster.isActive) {
    ctx.fillStyle = "orange";
    ctx.fillRect(
      paddleBooster.x,
      paddleBooster.y,
      paddleBooster.width,
      paddleBooster.height,
    );
  }
}

function update() {
  if (isGameOver) return;

  updatePaddle();
  updateBall();
  checkBallCollisions();
  checkBoosterCollision();
  checkGameOver();
  checkBrickCollisions();
}

function updatePaddle() {
  if (paddle.movingLeft) paddle.x -= paddle.speed;
  if (paddle.movingRight) paddle.x += paddle.speed;

  if (paddle.x < 0) paddle.x = 0;
  if (paddle.x + paddle.width > W) paddle.x = W - paddle.width;
}

function updateBall() {
  ball.x += ball.speedX;
  ball.y += ball.speedY;
}

function checkBallCollisions() {
  if (ball.x - ball.radius < 0 || ball.x + ball.radius > W) {
    ball.speedX = -ball.speedX;
  }

  if (ball.y - ball.radius < 0) {
    ball.speedY = -ball.speedY;
  }

  if (ballCollidesWithPaddle()) {
    ball.speedY = -Math.abs(ball.speedY);
    ball.y = paddle.y - ball.radius;

    const hitPos =
      (ball.x - (paddle.x + paddle.width / 2)) / (paddle.width / 2);

    const direction = hitPos > 0 ? 1 : -1;
    ball.speedX = direction * Math.abs(ball.speedX);

    if (Math.abs(hitPos) < 0.1) {
      ball.speedX = (Math.random() > 0.5 ? 1 : -1) * Math.abs(ball.speedX);
    }
    if (Math.abs(ball.speedX) < 1) {
      ball.speedX = ball.speedX >= 0 ? 1 : -1;
    }
  }
}

function ballCollidesWithPaddle() {
  return (
    ball.y + ball.radius >= paddle.y &&
    ball.y + ball.radius <= paddle.y + paddle.height &&
    ball.x + ball.radius >= paddle.x &&
    ball.x - ball.radius <= paddle.x + paddle.width
  );
}

function checkBoosterCollision() {
  if (!paddleBooster.isActive) return;

  paddleBooster.y += paddleBooster.speed;

  if (
    paddleBooster.y + paddleBooster.height >= paddle.y &&
    paddleBooster.x + paddleBooster.width >= paddle.x &&
    paddleBooster.x <= paddle.x + paddle.width
  ) {
    paddle.width += 30;
    paddleBooster.isActive = false;
    clearTimeout(boosterTimer);
    boosterTimer = setTimeout(() => {
      paddle.width -= 30;
    }, 5000);
  }

  if (paddleBooster.y > H) {
    paddleBooster.isActive = false;
  }
}

function checkGameOver() {
  if (ball.y > H) {
    isGameOver = true;
    updateHighScore();
    overlay.style.display = "flex";
  }
}

function checkBrickCollisions() {
  for (let brick of bricks) {
    if (!brick.alive) continue;

    if (ballCollidesWithBrick(brick)) {
      destroyBrick(brick);
      ball.speedY = -ball.speedY;
      break;
    }
  }
}

function ballCollidesWithBrick(brick) {
  return (
    ball.x + ball.radius >= brick.x &&
    ball.x - ball.radius <= brick.x + BRICK_W &&
    ball.y + ball.radius >= brick.y &&
    ball.y - ball.radius <= brick.y + BRICK_H
  );
}

function destroyBrick(brick) {
  brick.alive = false;
  if (Math.random() < 0.03) {
    paddleExpansion(brick);
  }
  ++score;
  counter.textContent = score;

  if (checkWin()) {
    winGame();
  }
}

function paddleExpansion(brick) {
  paddleBooster.x = brick.x;
  paddleBooster.y = brick.y;
  paddleBooster.isActive = true;
}

function updateHighScore() {
  if (score > highScore) {
    highScore = score;
    sessionStorage.setItem("highScore", highScore);
    document.getElementById("highScore").textContent = highScore;
  }
}

function checkWin() {
  return bricks.every((brick) => !brick.alive);
}

function winGame() {
  updateHighScore();
  document.getElementById("overlayText").textContent = "YOU WIN";
  const btn = document.getElementById("restartBtn");
  btn.textContent = "Next level";
  btn.onclick = () => resetGame();
  overlay.style.display = "flex";
  isGameOver = true;
}

function resetGame() {
  ball.x = W / 2;
  ball.y = H - 50;
  ball.speedX = 3;
  ball.speedY = -3;
  paddle.x = W / 2 - 40;
  paddle.width = 80;
  paddleBooster.isActive = false;
  bricks.forEach((brick) => (brick.alive = true));
  score = 0;
  counter.textContent = score;
  isGameOver = false;
  overlay.style.display = "none";
  const btn = document.getElementById("restartBtn");
  btn.textContent = "Заново";
  document.getElementById("overlayText").textContent = "GAME OVER";
  btn.onclick = null;
  clearTimeout(boosterTimer);
}

function gameLoop() {
  update();
  draw();
  requestAnimationFrame(gameLoop);
}

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft" || e.key === "a") paddle.movingLeft = true;
  if (e.key === "ArrowRight" || e.key === "d") paddle.movingRight = true;
});

document.addEventListener("keyup", (e) => {
  if (e.key === "ArrowLeft" || e.key === "a") paddle.movingLeft = false;
  if (e.key === "ArrowRight" || e.key === "d") paddle.movingRight = false;
});

document.getElementById("restartBtn").addEventListener("click", resetGame);

requestAnimationFrame(gameLoop);
