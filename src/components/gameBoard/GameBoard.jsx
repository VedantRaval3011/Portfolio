"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./gameBoard.module.css";
import { Bebas_Neue, Press_Start_2P } from "next/font/google";
import { IoArrowUpCircleOutline } from "react-icons/io5";
import {
  HiOutlineArrowCircleLeft,
  HiOutlineArrowCircleRight,
  HiOutlineArrowCircleDown,
} from "react-icons/hi";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

const pressStart2P = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
});

const CELL_SIZE = 10;
const WIDTH = 250;
const HEIGHT = 375;

const getRandomPosition = (max) => {
  return Math.floor((Math.random() * max) / CELL_SIZE) * CELL_SIZE;
};

const GameBoard = () => {
  const [snake, setSnake] = useState([
    { x: 50, y: 50 },
    { x: 40, y: 50 },
    { x: 30, y: 50 },
    { x: 20, y: 50 },
    { x: 10, y: 50 },
  ]);
  const [food, setFood] = useState({
    x: getRandomPosition(WIDTH),
    y: getRandomPosition(HEIGHT),
  });
  const [direction, setDirection] = useState({ x: 1, y: 0 });
  const [foodLeft, setFoodLeft] = useState(7);
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const canvasRef = useRef(null);

  const drawSnakeSegment = (context, x, y, isHead = false) => {
    const radius = CELL_SIZE / 2;
    context.beginPath();
    context.arc(x + radius, y + radius, radius, 0, 2 * Math.PI);
    context.closePath();

    const gradient = context.createRadialGradient(
      x + radius,
      y + radius,
      0,
      x + radius,
      y + radius,
      radius
    );
    gradient.addColorStop(0, "#90EE90");
    gradient.addColorStop(1, "#32CD32");

    context.fillStyle = gradient;
    context.fill();

    if (isHead) {
      // Draw eyes
      context.fillStyle = "white";
      context.beginPath();
      context.arc(x + radius - 2, y + radius - 2, 2, 0, 2 * Math.PI);
      context.arc(x + radius + 2, y + radius - 2, 2, 0, 2 * Math.PI);
      context.fill();

      // Draw pupils
      context.fillStyle = "black";
      context.beginPath();
      context.arc(x + radius - 2, y + radius - 2, 1, 0, 2 * Math.PI);
      context.arc(x + radius + 2, y + radius - 2, 1, 0, 2 * Math.PI);
      context.fill();
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, WIDTH, HEIGHT);

    // Draw snake
    snake.forEach((segment, index) => {
      drawSnakeSegment(context, segment.x, segment.y, index === 0);
    });

    // Draw food
    context.fillStyle = "crimson";
    context.beginPath();
    context.arc(
      food.x + CELL_SIZE / 2,
      food.y + CELL_SIZE / 2,
      CELL_SIZE / 2,
      0,
      2 * Math.PI
    );
    context.fill();

    // Draw game over or win message
    if (gameOver || gameWon) {
      context.font = `16px "${pressStart2P.style.fontFamily}"`;
      context.fillStyle = "white";
      context.textAlign = "center";
      context.textBaseline = "middle";
      const message = gameWon ? "YOU WON!" : "GAME OVER";
      context.fillText(message, WIDTH / 2, HEIGHT / 2);
    }
  }, [food, snake, gameOver, gameWon]);

  useEffect(() => {
    if (!gameStarted || gameOver || gameWon) return;

    const moveSnake = () => {
      setSnake((prevSnake) => {
        const newHead = {
          x: prevSnake[0].x + direction.x * CELL_SIZE,
          y: prevSnake[0].y + direction.y * CELL_SIZE,
        };

        // Check for collisions
        if (
          newHead.x < 0 ||
          newHead.x >= WIDTH ||
          newHead.y < 0 ||
          newHead.y >= HEIGHT ||
          prevSnake.some(
            (segment) => segment.x === newHead.x && segment.y === newHead.y
          )
        ) {
          setGameOver(true);
          return prevSnake;
        }

        const newSnake = [newHead, ...prevSnake];

        // Check if snake eats food
        if (newHead.x === food.x && newHead.y === food.y) {
          setFood({
            x: getRandomPosition(WIDTH),
            y: getRandomPosition(HEIGHT),
          });
          setFoodLeft((prevFoodLeft) => {
            const newFoodLeft = prevFoodLeft - 1;
            if (newFoodLeft === 0) {
              setGameWon(true);
            }
            return newFoodLeft;
          });
        } else {
          newSnake.pop();
        }
        return newSnake;
      });
    };

    const gameLoop = setInterval(moveSnake, 150);
    return () => clearInterval(gameLoop);
  }, [direction, gameStarted, gameOver, gameWon, food]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!gameStarted || gameOver || gameWon) return;

      switch (e.key) {
        case "ArrowUp":
          if (direction.y === 0) setDirection({ x: 0, y: -1 });
          break;
        case "ArrowDown":
          if (direction.y === 0) setDirection({ x: 0, y: 1 });
          break;
        case "ArrowLeft":
          if (direction.x === 0) setDirection({ x: -1, y: 0 });
          break;
        case "ArrowRight":
          if (direction.x === 0) setDirection({ x: 1, y: 0 });
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [direction, gameStarted, gameOver, gameWon]);

  const handleStartReset = () => {
    setSnake([
      { x: 50, y: 50 },
      { x: 40, y: 50 },
      { x: 30, y: 50 },
      { x: 20, y: 50 },
      { x: 10, y: 50 },
    ]);
    setDirection({ x: 1, y: 0 });
    setFood({ x: getRandomPosition(WIDTH), y: getRandomPosition(HEIGHT) });
    setGameOver(false);
    setGameWon(false);
    setFoodLeft(7);
    setGameStarted(true);
  };

  return (
    <>
      <div className={styles.gameContainer}>
        <canvas
          ref={canvasRef}
          className={styles.playground}
          width={WIDTH}
          height={HEIGHT}
        ></canvas>
        <div className={styles.gameContent}>
          <div className={styles.arrows}>
            <IoArrowUpCircleOutline
              className={styles.arrowButton}
              onClick={() =>
                gameStarted &&
                !gameOver &&
                !gameWon &&
                direction.y === 0 &&
                setDirection({ x: 0, y: -1 })
              }
            />
            <div className={styles.bottomArrows}>
              <HiOutlineArrowCircleLeft
                className={styles.arrowButton}
                onClick={() =>
                  gameStarted &&
                  !gameOver &&
                  !gameWon &&
                  direction.x === 0 &&
                  setDirection({ x: -1, y: 0 })
                }
              />
              <HiOutlineArrowCircleDown
                className={styles.arrowButton}
                onClick={() =>
                  gameStarted &&
                  !gameOver &&
                  !gameWon &&
                  direction.y === 0 &&
                  setDirection({ x: 0, y: 1 })
                }
              />
              <HiOutlineArrowCircleRight
                className={styles.arrowButton}
                onClick={() =>
                  gameStarted &&
                  !gameOver &&
                  !gameWon &&
                  direction.x === 0 &&
                  setDirection({ x: 1, y: 0 })
                }
              />
            </div>
          </div>
          <div className={styles.gameInfo}>
            <button
              onClick={handleStartReset}
              className={`${styles.gameButton} ${bebasNeue.className}`}
            >
              {gameOver || gameWon
                ? "RESTART"
                : gameStarted
                ? "RESET"
                : "START"}
            </button>
            <p className={`${styles.foodLeft} ${bebasNeue.className}`}>
              Food left: {"  " + foodLeft}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default GameBoard;
