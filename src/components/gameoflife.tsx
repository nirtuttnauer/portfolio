import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Helper functions
const createEmptyGrid = (rows: number, cols: number) =>
  Array.from({ length: rows }).map(() => Array(cols).fill(0));

const cloneGrid = (grid: number[][]) => grid.map((row) => [...row]);

const countNeighbors = (grid: number[][], x: number, y: number) => {
  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
    [1, 1],
    [-1, -1],
    [1, -1],
    [-1, 1],
  ];
  let count = 0;
  directions.forEach(([dx, dy]) => {
    const newX = x + dx;
    const newY = y + dy;
    if (
      newX >= 0 &&
      newX < grid.length &&
      newY >= 0 &&
      newY < grid[0].length &&
      grid[newX][newY]
    ) {
      count++;
    }
  });
  return count;
};

const GameOfLife = () => {
  const numRows = 30;
  const numCols = 30;

  const [grid, setGrid] = useState(() => createEmptyGrid(numRows, numCols));
  const [running, setRunning] = useState(false);

  const handleCellClick = (row: number, col: number) => {
    const newGrid = cloneGrid(grid);
    newGrid[row][col] = grid[row][col] ? 0 : 1;
    setGrid(newGrid);
  };

  const updateGrid = () => {
    setGrid((prevGrid) => {
      const newGrid = cloneGrid(prevGrid);
      for (let row = 0; row < numRows; row++) {
        for (let col = 0; col < numCols; col++) {
          const neighbors = countNeighbors(prevGrid, row, col);
          if (prevGrid[row][col] === 1) {
            if (neighbors < 2 || neighbors > 3) {
              newGrid[row][col] = 0; // Dies
            }
          } else {
            if (neighbors === 3) {
              newGrid[row][col] = 1; // Becomes alive
            }
          }
        }
      }
      return newGrid;
    });
  };

  useEffect(() => {
    if (!running) return;

    const interval = setInterval(updateGrid, 300);
    return () => clearInterval(interval);
  }, [running]);

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold text-cyan-400 mb-5">Game of Life</h1>
      <div
        className="grid gap-1 justify-center"
        style={{
          gridTemplateColumns: `repeat(${numCols}, 1rem)`,
        }}
      >
        {grid.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <motion.div
              key={`${rowIndex}-${colIndex}`}
              onClick={() => handleCellClick(rowIndex, colIndex)}
              className={`w-4 h-4 rounded-sm cursor-pointer ${
                cell ? "bg-cyan-400" : "bg-gray-800"
              }`}
              animate={{
                scale: cell ? 1.2 : 1, // Slightly enlarge live cells
              }}
              transition={{
                duration: 0.3, // Animation duration
              }}
            />
          ))
        )}
      </div>
      <div className="mt-5">
        <motion.button
          onClick={() => setRunning(!running)}
          className={`px-5 py-2 font-semibold text-sm rounded-lg shadow-md ${
            running ? "bg-red-500 text-white" : "bg-cyan-400 text-gray-900"
          } hover:scale-105 transition-transform`}
        >
          {running ? "Pause" : "Start"}
        </motion.button>
        <motion.button
          onClick={() => setGrid(createEmptyGrid(numRows, numCols))}
          className="ml-4 px-5 py-2 font-semibold text-sm rounded-lg shadow-md bg-gray-800 text-cyan-400 border border-cyan-400 hover:scale-105 transition-transform"
        >
          Clear
        </motion.button>
      </div>
    </div>
  );
};

export default GameOfLife;