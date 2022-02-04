const complexity = [{
  id: 1,
  type: 'basic',
  noOfWeapons: 3,
  name: 'Three weapons'
}, {
  id: 2,
  type: 'advanced',
  noOfWeapons: 5,
  name: 'Five weapons',
},
];

const gameType = [{
  id: 1,
  type: 'human-vs-computer',
  name: 'Human vs Computer'
}, {
  id: 2,
  type: 'computer-vs-computer',
  name: 'Computer vs Computer ',
},
];

const weapons = [
  'Scissors',
  'Paper',
  'Rock',
  'Lizzard',
  'Spock',
];

const gameData = {
  name: 'Rock - Scissors - Paper',
  complexity,
  gameType,
  weapons,
};

const menus = [{
  name: 'GitHub',
  url: 'https://github.com/criscond/rock-paper-scissors',
  rel: 'noreferrer'
}, {
  name: 'WiKi',
  url: 'https://en.wikipedia.org/wiki/Rock-paper-scissors',
  rel: 'noreferrer'
}
];

const copyright = 'CrisCond';

export {
  gameData,
  menus,
  copyright,
};

