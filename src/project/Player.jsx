import React, { useState } from "react";

const Player = ({ initiaName, symbol, isActive, playerName, setPlayerName }) => {
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing(!isEditing);
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let editablePlayerName = (
    <p className="text-xl font-semibold mr-2">{playerName}</p>
  );

  if (isEditing) {
    editablePlayerName = (
      <input
        type="text"
        required
        className="font-semibold mr-2 p-1 border border-gray-300 rounded-full w-[100px] text-blue-500 animate-pulse"
        value={playerName}
        onChange={handleChange}
      />
    );
  }

  return (
    <div className={`flex items-center flex-row px-3 py-2 rounded-full ${isActive ? 'bg-rose-300 animate-pulse' : 'bg-gray-300'}`}>
      <div>{editablePlayerName}</div>
      <div className="px-3 rounded-full mr-2 text-2xl bg-gray-400 flex items-center justify-center">
        {symbol}
      </div>
      <button
        onClick={handleEditClick}
        className="px-2 py-1 bg-green-500 rounded-full text-white hover:bg-green-600"
      >
        {isEditing ? "Save" : "Edit"}
      </button>
    </div>
  );
};

export default Player;
