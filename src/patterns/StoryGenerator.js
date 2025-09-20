import { StoryBuilder } from './StoryBuilder';
import { StoryIterator } from './StoryIterator';
import { characters, problems, solutions, places, companions, obstacles, twists } from '../data/stories';

export class StoryGenerator {
  constructor() {
    this.characterIterator = new StoryIterator(characters);
    this.problemIterator = new StoryIterator(problems);
    this.solutionIterator = new StoryIterator(solutions);
    this.placeIterator = new StoryIterator(places);
    this.companionIterator = new StoryIterator(companions);
    this.obstacleIterator = new StoryIterator(obstacles);
    this.twistIterator = new StoryIterator(twists);
    this.builder = new StoryBuilder();
  }

  // Template method - define el esqueleto del algoritmo
  generateStory() {
    this.selectCharacter();
    this.selectProblem();
    this.selectSolution();
    this.selectPlace();
    this.selectCompanion();
    this.selectObstacle();
    this.selectTwist();
    return this.createStory();
  }

  // Estos métodos pueden ser sobrescritos por subclases
  selectCharacter() {
    this.character = this.characterIterator.getRandom();
  }

  selectProblem() {
    this.problem = this.problemIterator.getRandom();
  }

  selectSolution() {
    this.solution = this.solutionIterator.getRandom();
  }

  selectPlace() {
    this.place = this.placeIterator.getRandom();
  }

  selectCompanion() {
    this.companion = this.companionIterator.getRandom();
  }

  selectObstacle() {
    this.obstacle = this.obstacleIterator.getRandom();
  }

  selectTwist() {
    this.twist = this.twistIterator.getRandom();
  }

  createStory() {
    return this.builder
      .addIntroduction(this.character, this.place)
      .addBackground(this.character)
      .addProblem(this.problem)
      .addCompanion(this.companion)
      .addObstacle(this.obstacle)
      .addTwist(this.twist)
      .addSolution(this.character, this.solution)
      .addConclusion()
      .build();
  }
}

// Ejemplo de subclase para cuentos épicos
export class EpicStoryGenerator extends StoryGenerator {
  selectSolution() {
    // Soluciones más épicas y dramáticas
    const epicSolutions = [
      'libró una batalla legendaria que cambió el curso de la historia para siempre, siendo recordado como un héroe eterno.',
      'realizó el sacrificio ultimate que salvó a la humanidad, transformándose en una constelación en el cielo nocturno.',
      'descubrió la verdad última del universo y usó ese conocimiento para reescribir la realidad misma.',
      'unió a todas las razas y reinos en una alianza eterna que trajo una paz permanente.'
    ];
    this.solution = new StoryIterator(epicSolutions).getRandom();
  }
}

// Ejemplo de subclase para cuentos de comedia
export class ComedyStoryGenerator extends StoryGenerator {
  selectSolution() {
    const funnySolutions = [
      'hizo un chiste tan terrible que el villano se rindió de la risa, prometiendo reformarse y abrir una tienda de comedia.',
      'distrajo al enemigo con un baile ridículo que se volvió viral, haciendo que todos se unieran en una fiesta masiva.',
      'encontró la solución por accidente, tropezando con el interruptor mágico que resolvía todo el problema.',
      'convenció al villano de que ser bueno era la nueva moda, empezando una tendencia mundial de bondad.'
    ];
    this.solution = new StoryIterator(funnySolutions).getRandom();
  }
}

// Ejemplo de subclase para cuentos de fantasía
export class FantasyStoryGenerator extends StoryGenerator {
  selectCharacter() {
    const fantasyCharacters = characters.filter(
      char => char.type.type === 'héroe' || char.type.type === 'mago' || char.type.type === 'guerrero'
    );
    this.character = new StoryIterator(fantasyCharacters).getRandom();
  }
  
  selectCompanion() {
    const fantasyCompanions = [
      'un dragón sabio que habla en acertijos',
      'un elfo inmortal con arco mágico',
      'un enano experto en forja de armas',
      'un hada traviesa pero poderosa'
    ];
    this.companion = new StoryIterator(fantasyCompanions).getRandom();
  }
}