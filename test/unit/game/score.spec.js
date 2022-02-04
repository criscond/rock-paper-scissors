const getWeaponIds = require('../../../src/js/game/score').__get__('getWeaponIds');
const getScore = require('../../../src/js/game/score').__get__('getScore');
const { initiateTheGame } = require('../../../src/js/game/init');
import { changeOpponents } from '../../../src/js/game/actions';
import renderTheGame from '../../../src/js/components';
import { makeTheChalenge } from '../../../src/js/game/score';

describe('Game Score', () => {

  it('should initiate the game score', () => {
    let score = document.getElementById('score');
    initiateTheGame();
    renderTheGame();

    expect(score).toBeNull();

    makeTheChalenge();
    score = document.getElementById('score');

    expect(score).toHaveProperty('innerHTML');
  });

  it('should convert the name of the weapons in they ids', () => {
    const weaponIds = getWeaponIds('Paper', 'Rock');
    const expected = { "playerOneWeaponId": 1, "playerTwoWeaponId": 2 };

    expect(weaponIds).toEqual(expected);
  });

  it('should generate random weapon ids when the name of the weapons do not exist', () => {
    const weaponIds = getWeaponIds();

    expect(Object.keys(weaponIds)).toContain('playerOneWeaponId');
    expect(Object.keys(weaponIds)).toContain('playerTwoWeaponId');
  });

  describe('Scoring', () => {

    it('should display score <Player 2 wins>', () => {
      initiateTheGame();
      renderTheGame();

      const score = getScore(1, 3);
      const expected = 'Player 2 wins: Lizzard beats Paper';

      expect(score).toEqual(expected);
    });

    it('should display score <You WIN>', () => {
      initiateTheGame();
      renderTheGame();

      const score = getScore(3, 1);
      const expected = 'Congrats, <b>YOU WIN</b>: Lizzard beats Paper';

      expect(score).toEqual(expected);
    });

    it('should display score <TIE: Paper vs Paper>', () => {
      initiateTheGame();
      renderTheGame();

      const score = getScore(1, 1);
      const expected = 'It is TIE: Paper vs Paper';

      expect(score).toEqual(expected);
    });

    it('should display score <Player 1 wins>', () => {
      initiateTheGame();
      changeOpponents(2);
      renderTheGame();

      const score = getScore(3, 1);
      const expected = 'Player 1 wins: Lizzard beats Paper';

      expect(score).toEqual(expected);
    });

  });
});
