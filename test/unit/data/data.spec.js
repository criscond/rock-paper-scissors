import { gameData, menus, copyright } from '../../../src/js/data';
describe('Game Data', () => {

  it('should get the gameData', () => {
    const expected = {
      name: 'Rock - Scissors - Paper',
      complexity: [{
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
      ],
      gameType: [{
        id: 1,
        type: 'human-vs-computer',
        name: 'Human vs Computer'
      }, {
        id: 2,
        type: 'computer-vs-computer',
        name: 'Computer vs Computer ',
      },
      ],
      weapons: [
        'Scissors',
        'Paper',
        'Rock',
        'Lizzard',
        'Spock',
      ]
    }

    expect(gameData).toEqual(expected);
  });

  it('should get the page menus', () => {
    const expected = [{
      name: 'GitHub',
      url: 'https://github.com/criscond/rock-paper-scissors',
      rel: 'noreferrer'
    }, {
      name: 'WiKi',
      url: 'https://en.wikipedia.org/wiki/Rock-paper-scissors',
      rel: 'noreferrer'
    }
    ];

    expect(menus).toEqual(expected);
  });

  it('should get the copyright', () => {
    const expected = 'CrisCond';

    expect(copyright).toEqual(expected);
  });
});
