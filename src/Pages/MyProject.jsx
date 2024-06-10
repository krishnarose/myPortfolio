import React from 'react';
import ProjectCard from './ProjectCard';

const MyProjects = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-8">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard 
          title="Tic-Tac-Toe Game"
          description="A fun and interactive Tic-Tac-Toe game built with React."
        />
        {/* Add more ProjectCards here for other projects */}
      </div>
    </div>
  );
};

export default MyProjects;
