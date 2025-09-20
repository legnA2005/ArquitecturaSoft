import React, { useState } from 'react';
import { StoryGenerator, ComedyStoryGenerator, FantasyStoryGenerator } from '../patterns/StoryGenerator';
import StoryDisplay from './StoryDisplay';

const StoryGeneratorUI = () => {
  const [story, setStory] = useState(null);
  const [storyType, setStoryType] = useState('normal');

  const generateStory = () => {
    let generator;
    
    switch(storyType) {
      case 'comedy':
        generator = new ComedyStoryGenerator();
        break;
      case 'fantasy':
        generator = new FantasyStoryGenerator();
        break;
      default:
        generator = new StoryGenerator();
    }
    
    const newStory = generator.generateStory();
    setStory(newStory);
  };

  return (
    <div className="story-generator">
      <h1>Generador de Cuentos Aleatorios</h1>
      <div className="controls">
        <label>
          Tipo de Cuento:
          <select value={storyType} onChange={(e) => setStoryType(e.target.value)}>
            <option value="normal">Normal</option>
            <option value="comedy">Comedia</option>
            <option value="fantasy">Fantasía</option>
          </select>
        </label>
        <button onClick={generateStory}>Generar Cuento</button>
      </div>
      {story && <StoryDisplay story={story} />}
    </div>
  );
};

export default StoryGeneratorUI;