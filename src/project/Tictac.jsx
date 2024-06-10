import React, { useState } from "react";
import Player from "./Player";
import GameBoard from "./GameBoard";
import Log from "./Log";
import WinnerModal from "./WinnerModel"; // Import the WinnerModal component
import { WINNING_COMBINATIONS } from "./winning-combinations";

const Tictac = () => {
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState("X");
  const [winner, setWinner] = useState(null);
  const [player1, setPlayer1] = useState("Player 1");
  const [player2, setPlayer2] = useState("Player 2");

  const playerNames = {
    X: player1,
    O: player2,
  };

  function checkWinner(turns) {
    for (const combination of WINNING_COMBINATIONS) {
      const [a, b, c] = combination;
      const hasWinningCombination =
        turns.some(turn => turn.square.row === a.row && turn.square.col === a.column && turn.player === activePlayer) &&
        turns.some(turn => turn.square.row === b.row && turn.square.col === b.column && turn.player === activePlayer) &&
        turns.some(turn => turn.square.row === c.row && turn.square.col === c.column && turn.player === activePlayer);

      if (hasWinningCombination) {
        return activePlayer;
      }
    }
    return null;
  }

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns((prevTurns) => {
      // Prevent updating an occupied square or if there's already a winner
      if (prevTurns.some(turn => turn.square.row === rowIndex && turn.square.col === colIndex) || winner) {
        return prevTurns;
      }

      const newTurn = { square: { row: rowIndex, col: colIndex }, player: activePlayer };
      const newTurns = [...prevTurns, newTurn];

      // Check for winner
      const potentialWinner = checkWinner(newTurns);
      if (potentialWinner) {
        setWinner(potentialWinner);
      } else {
        // Toggle the active player if no winner
        setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));
      }

      return newTurns;
    });
  }

  function handleNewGame() {
    setGameTurns([]);
    setActivePlayer("X");
    setWinner(null);
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-gray-200 lg:w-[500px] lg:h-[600px] shadow-xl rounded-xl w-[90%] md:w-[500px] h-auto p-5">
        <div className="flex flex-col md:flex-row items-center justify-between mb-5 space-y-4 md:space-y-0">
          <Player
            initiaName="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
            playerName={player1}
            setPlayerName={setPlayer1}
          />
          <Player
            initiaName="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
            playerName={player2}
            setPlayerName={setPlayer2}
          />
        </div>
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} />
        <Log turns={gameTurns} playerNames={playerNames} />
        {winner && <WinnerModal winner={playerNames[winner]} onClose={handleNewGame} />}
      </div>
    </div>
  );
};

export default Tictac;
