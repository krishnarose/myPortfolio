import React from "react";

const WinnerModal = ({ winner, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-5 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Congratulations!</h2>
        <p className="text-lg mb-4">{winner} is the winner!</p>
        <button
          onClick={onClose}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          Start New Game
        </button>
      </div>
    </div>
  );
};

export default WinnerModal;
