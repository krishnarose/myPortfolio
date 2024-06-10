import React from "react";

const Log = ({ turns, playerNames }) => {
  return (
    <div className="mt-5 text-center">
      <p className="text-lg font-semibold">Log of Actions:</p>
      <ul>
        {turns.map((turn, index) => (
          <li key={index} className="text-sm">
            {playerNames[turn.player]} selected {turn.square.row},{turn.square.col}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Log;
