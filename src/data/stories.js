// Patrón Flyweight: tipos compartidos para personajes y problemas
export const characterTypes = {
  hero: { type: 'héroe', description: 'valiente y poderoso', power: 'fuerza sobrehumana' },
  villain: { type: 'villano', description: 'malvado y astuto', power: 'magia oscura' },
  wise: { type: 'sabio', description: 'inteligente y experimentado', power: 'sabiduría ancestral' },
  trickster: { type: 'travieso', description: 'engañoso pero divertido', power: 'astucia infinita' },
  warrior: { type: 'guerrero', description: 'fuerte y disciplinado', power: 'habilidad marcial' },
  mage: { type: 'mago', description: 'conocedor de artes arcanas', power: 'hechicería poderosa' },
  healer: { type: 'sanador', description: 'compasivo y curativo', power: 'magia de sanación' }
};

export const problemTypes = {
  dragon: { type: 'dragón', description: 'un temible dragón que escupe fuego' },
  curse: { type: 'maldición', description: 'una maldición ancestral que afecta a todo el reino' },
  drought: { type: 'sequía', description: 'una sequía prolongada que amenaza la vida' },
  darkness: { type: 'oscuridad', description: 'una oscuridad eterna que cubre la tierra' },
  invasion: { type: 'invasión', description: 'un ejército invasor que amenaza la paz' },
  plague: { type: 'plaga', description: 'una enfermedad misteriosa que se extiende' },
  prophecy: { type: 'profecía', description: 'una antigua profecía que debe cumplirse' }
};

// Arrays con opciones para el Iterator
export const characters = [
  { name: 'Goku', type: characterTypes.hero, background: 'entrenado en artes marciales desde niño' },
  { name: 'Vegeta', type: characterTypes.hero, background: 'príncipe de una raza guerrera' },
  { name: 'Piccolo', type: characterTypes.wise, background: 'ser místico con siglos de sabiduría' },
  { name: 'Freezer', type: characterTypes.villain, background: 'tirano intergaláctico despiadado' },
  { name: 'Majin Boo', type: characterTypes.trickster, background: 'ser mágico de poder ancestral' },
  { name: 'Superman', type: characterTypes.hero, background: 'último hijo de Krypton' },
  { name: 'Gandalf', type: characterTypes.wise, background: 'mago del consejo blanco' },
  { name: 'Sauron', type: characterTypes.villain, background: 'señor oscuro de Mordor' },
  { name: 'Loki', type: characterTypes.trickster, background: 'dios nórdico de las travesuras' },
  { name: 'Aragorn', type: characterTypes.warrior, background: 'descendiente de los reyes de antaño' },
  { name: 'Merlín', type: characterTypes.mage, background: 'archimago de la corte de Camelot' },
  { name: 'Hermione', type: characterTypes.mage, background: 'bruja con intelecto excepcional' }
];

export const problems = [
  { description: 'amenazaba con destruir la aldea', type: problemTypes.dragon, severity: 'catastrófico' },
  { description: 'había sumido a la tierra en la más profunda oscuridad', type: problemTypes.darkness, severity: 'apocalíptico' },
  { description: 'había lanzado una terrible maldición sobre el reino', type: problemTypes.curse, severity: 'grave' },
  { description: 'amenazaba con matar de sed a toda la población', type: problemTypes.drought, severity: 'crítico' },
  { description: 'preparaba una invasión masiva desde el norte', type: problemTypes.invasion, severity: 'inminente' },
  { description: 'había desatado una plaga misteriosa', type: problemTypes.plague, severity: 'devastador' },
  { description: 'anunciaba el fin de los tiempos', type: problemTypes.prophecy, severity: 'inevitable' }
];

export const solutions = [
  'usó su poder especial para derrotar la amenaza después de una épica batalla que duró tres días y tres noches.',
  'encontró un artefacto mágico ancestral que le permitió resolver la situación mediante un complejo ritual.',
  'convenció a todos los pueblos de unirse y formar una alianza que superó el problema mediante la cooperación.',
  'descubrió una debilidad inesperada y la exploitó con éxito mediante una estrategia brillante.',
  'aprendió una lección importante de sus mentores que le dio la fuerza y sabiduría para triunfar.',
  'viajó a través de dimensiones alternativas para encontrar la solución perfecta al problema.',
  'realizó un sacrificio personal que cambió el curso de los eventos y salvó a todos.'
];

export const places = [
  'en un lejano reino rodeado de montañas imponentes',
  'en la mística tierra de Avalon, donde la magia fluye como el agua',
  'en la aldea escondida entre montañas nevadas',
  'en el futurista planeta Namek, habitado por seres de piel verde',
  'en la encantada foresta de Endor, con árboles que tocan el cielo',
  'en la ciudad flotante de Atlantis, perdida durante milenios',
  'en el desierto de Shurima, lleno de ruinas antiguas y secretos',
  'en las islas brumosas de Theros, donde los dioses caminan entre mortales'
];

export const companions = [
  'un fiel compañero guerrero',
  'una sabia mentora anciana',
  'un grupo de valientes aventureros',
  'una criatura mágica parlante',
  'un robot inteligente del futuro',
  'un espíritu ancestral guía',
  'un ejército de leales seguidores'
];

export const obstacles = [
  'tuvo que cruzar un río de lava',
  'enfrentó a guardianes mágicos ancestrales',
  'resolvió enigmas milenarios',
  'superó sus mayores miedos',
  'aprendió a dominar un nuevo poder',
  'negoció con seres de otras dimensiones',
  'encontró traición en alguien cercano'
];

export const twists = [
  'descubriendo que el verdadero villano era alguien inesperado',
  'encontrando que la solución estaba dentro de sí mismo todo el tiempo',
  'revelando una conexión familiar oculta con el antagonista',
  'descubriendo que todo era una prueba para un destino mayor',
  'encontrando que el problema era en realidad una oportunidad',
  'revelando que el tiempo era una ilusión y todo podía cambiarse',
  'descubriendo que el mundo que conocía era solo uno de muchos'
];