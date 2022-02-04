import { changeComplexity, changeOpponents, resetGame } from '../../../src/js/game/actions';
import { getSavedData } from '../../../src/js/game/localstorage';
import { LOCALSTORAGE } from '../../../src/js/constants';

const { CURRENT_GAME_COMPLEXITY, CURRENT_GAME_TYPE } = LOCALSTORAGE;
describe('Game Actions', () => {

  it('should change the complexity of the game', () => {
    let currentComplexity = getSavedData(CURRENT_GAME_COMPLEXITY);

    expect(currentComplexity).toBeNull();

    changeComplexity(2);
    currentComplexity = getSavedData(CURRENT_GAME_COMPLEXITY);

    expect(currentComplexity).toEqual('2');
  });

  it('should change the opponents of the game', () => {
    let currentGameType = getSavedData(CURRENT_GAME_TYPE);

    expect(currentGameType).toBeNull();

    changeOpponents(2);
    currentGameType = getSavedData(CURRENT_GAME_TYPE);

    expect(currentGameType).toEqual('2');
  });

  it('should reset the game', () => {
    let currentGameType = getSavedData(CURRENT_GAME_TYPE);
    let currentComplexity = getSavedData(CURRENT_GAME_COMPLEXITY);

    expect(currentGameType).toEqual('2');
    expect(currentComplexity).toEqual('2');

    resetGame();

    currentGameType = getSavedData(CURRENT_GAME_TYPE);
    currentComplexity = getSavedData(CURRENT_GAME_COMPLEXITY);

    expect(currentGameType).toEqual('1');
    expect(currentComplexity).toEqual('1');
  });
});
