import React from "react";

const GameBoard = ({ onSelectSquare, turns }) => {
  const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

  let gameBoard = initialGameBoard.map((row) => row.slice());
  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

  return (
    <div className="flex items-center justify-center mt-5 md:mt-0">
      <div className="grid grid-rows-3 gap-2">
        {gameBoard.map((row, rowIndex) => (
          <div key={rowIndex} className="flex space-x-2">
            {row.map((playerSymbol, colIndex) => (
              <button
                onClick={() => !playerSymbol && onSelectSquare(rowIndex, colIndex)} // Prevent clicking an occupied square
                key={colIndex}
                className="w-16 h-16 bg-gray-300 rounded-md text-2xl flex items-center justify-center shadow-md"
              >
                {playerSymbol}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameBoard;
