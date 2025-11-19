import React, { useRef, useEffect, useState } from "react";

export default function BreakoutGame() {
  const canvasRef = useRef(null);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = 600;
    canvas.height = 400;

    let paddle = {
      x: canvas.width / 2 - 40,
      y: canvas.height - 20,
      width: 80,
      height: 10,
      speed: 6,
      dx: 0,
    };

    let ball = {
      x: canvas.width / 2,
      y: canvas.height / 2,
      size: 8,
      dx: 4,
      dy: -4,
    };

    const brickRow = 5;
    const brickCol = 8;
    const brickWidth = 60;
    const brickHeight = 20;
    const brickPadding = 10;
    const bricks = [];

    for (let r = 0; r < brickRow; r++) {
      bricks[r] = [];
      for (let c = 0; c < brickCol; c++) {
        bricks[r][c] = {
          x: c * (brickWidth + brickPadding) + 30,
          y: r * (brickHeight + brickPadding) + 30,
          visible: true,
        };
      }
    }

    function drawPaddle() {
      ctx.fillRect(paddle.x, paddle.y, paddle.width, paddle.height);
    }

    function drawBall() {
      ctx.beginPath();
      ctx.arc(ball.x, ball.y, ball.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.closePath();
    }

    function drawBricks() {
      bricks.forEach(row => {
        row.forEach(brick => {
          if (brick.visible) ctx.fillRect(brick.x, brick.y, brickWidth, brickHeight);
        });
      });
    }

    function movePaddle() {
      paddle.x += paddle.dx;
      if (paddle.x < 0) paddle.x = 0;
      if (paddle.x + paddle.width > canvas.width) paddle.x = canvas.width - paddle.width;
    }

    function moveBall() {
      ball.x += ball.dx;
      ball.y += ball.dy;

      if (ball.x + ball.size > canvas.width || ball.x - ball.size < 0) ball.dx *= -1;
      if (ball.y - ball.size < 0) ball.dy *= -1;

      if (
        ball.x > paddle.x &&
        ball.x < paddle.x + paddle.width &&
        ball.y + ball.size > paddle.y
      ) {
        ball.dy *= -1;
      }

      bricks.forEach(row => {
        row.forEach(brick => {
          if (brick.visible) {
            if (
              ball.x > brick.x &&
              ball.x < brick.x + brickWidth &&
              ball.y > brick.y &&
              ball.y < brick.y + brickHeight
            ) {
              ball.dy *= -1;
              brick.visible = false;
            }
          }
        });
      });

      if (ball.y + ball.size > canvas.height) resetGame();
    }

    function resetGame() {
      ball.x = canvas.width / 2;
      ball.y = canvas.height / 2;
      ball.dx = 4;
      ball.dy = -4;

      bricks.forEach(row => row.forEach(brick => (brick.visible = true)));
    }

    function update() {
      if (!isRunning) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      drawPaddle();
      drawBall();
      drawBricks();

      movePaddle();
      moveBall();

      requestAnimationFrame(update);
    }

    update();

    function keyDown(e) {
      if (e.key === "ArrowRight") paddle.dx = paddle.speed;
      else if (e.key === "ArrowLeft") paddle.dx = -paddle.speed;
      else if (e.key === " ") setIsRunning(prev => !prev);
    }

    function keyUp(e) {
      if (e.key === "ArrowRight" || e.key === "ArrowLeft") paddle.dx = 0;
    }

    window.addEventListener("keydown", keyDown);
    window.addEventListener("keyup", keyUp);

    return () => {
      window.removeEventListener("keydown", keyDown);
      window.removeEventListener("keyup", keyUp);
    };
  }, [isRunning]);

  return (
    <div className="w-full flex flex-col items-center p-4">
      <h1 className="text-xl mb-2">React Breakout Game</h1>
      <canvas ref={canvasRef} className="border shadow-xl rounded"></canvas>
      <p className="mt-2 text-sm">Use ← → arrows. Press Space to Pause/Play.</p>
    </div>
  );
}