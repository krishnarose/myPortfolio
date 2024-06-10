import React, { useState } from 'react';
import Tictac from '../project/Tictac';

const ProjectCard = ({ title, description }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 py-4">
        <button 
          onClick={openModal} 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          View
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-5 rounded-lg shadow-lg relative w-full max-w-lg">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-black bg-gray-200 hover:bg-gray-300 rounded-full p-1"
            >
              &#10006;
            </button>
            <Tictac />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
