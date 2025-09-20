export class StoryBuilder {
  constructor() {
    this.story = {
      introduction: '',
      background: '',
      problem: '',
      journey: '',
      climax: '',
      resolution: '',
      fullStory: '',
      character: null,
      problemObj: null,
      solution: '',
      companion: '',
      obstacle: '',
      twist: ''
    };
  }

  addIntroduction(character, place) {
    this.story.character = character;
    this.story.introduction = `Había una vez ${character.name}, un ${character.type.type} ${character.type.description} que vivía ${place}.`;
    return this;
  }

  addBackground(character) {
    this.story.background = `${character.name}, ${character.background}, había estado preparándose para un desafío mayor toda su vida sin saberlo.`;
    return this;
  }

  addProblem(problem) {
    this.story.problemObj = problem;
    this.story.problem = `Un día, ${problem.description} que ${problem.type.description}. La situación era ${problem.severity} y requería una solución inmediata.`;
    return this;
  }

  addCompanion(companion) {
    this.story.companion = companion;
    this.story.journey = `En su búsqueda por una solución, ${this.story.character.name} se unió con ${companion}. Juntos emprendieron un viaje lleno de peligros y descubrimientos.`;
    return this;
  }

  addObstacle(obstacle) {
    this.story.obstacle = obstacle;
    this.story.journey += ` En el camino, ${this.story.character.name} ${obstacle}, lo que fortaleció su determinación.`;
    return this;
  }

  addTwist(twist) {
    this.story.twist = twist;
    this.story.climax = `El momento crucial llegó cuando ${twist}. Todo cambió en un instante y nuevas posibilidades se revelaron.`;
    return this;
  }

  addSolution(character, solution) {
    this.story.solution = solution;
    this.story.resolution = `Finalmente, después de muchas peripecias, ${character.name} ${solution}`;
    return this;
  }

  addConclusion() {
    this.story.conclusion = `La historia de ${this.story.character.name} se convirtió en leyenda, recordada por generaciones como un ejemplo de coraje y determinación. El mundo nunca volvería a ser el mismo.`;
    return this;
  }

  build() {
    this.story.fullStory = `
      ${this.story.introduction}
      
      ${this.story.background}
      
      ${this.story.problem}
      
      ${this.story.journey}
      
      ${this.story.climax}
      
      ${this.story.resolution}
      
      ${this.story.conclusion}
    `.replace(/\s+/g, ' ').trim();
    
    return this.story;
  }
}