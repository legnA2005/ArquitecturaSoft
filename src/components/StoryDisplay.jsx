import React from 'react';

const StoryDisplay = ({ story }) => {
  if (!story || !story.character) return null;

  return (
    <div className="story-display">
      <h2>Cuento Generado PaPu</h2>
      <div className="story-card">
        <p>{story.fullStory}</p>
      </div>
      <div className="story-details">
        <h3>Estas son las caracteristicas de tu Papu-cuento</h3>
        <p><strong>Protagonista:</strong> {story.character.name} - {story.character.type.description}</p>
        <p><strong>Origen:</strong> {story.character.background}</p>
        <p><strong>Conflicto:</strong> {story.problemObj?.type?.description || 'Desafío misterioso'}</p>
        <p><strong>Aliado:</strong> {story.companion}</p>
        <p><strong>Obstáculo:</strong> {story.obstacle}</p>
        <p><strong>Giro:</strong> {story.twist}</p>
        <p><strong>Resolución:</strong> {story.solution}</p>
      </div>
    </div>
  );
};

export default StoryDisplay;