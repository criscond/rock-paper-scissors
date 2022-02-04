import { gameData } from '../data';
import { saveData } from '.';
import { LOCALSTORAGE } from '../constants';
import renderTheGame from '../components';

const { CURRENT_GAME_TYPE, CURRENT_GAME_COMPLEXITY } = LOCALSTORAGE;

const changeOpponents = (value) => {
  saveData(CURRENT_GAME_TYPE, value);
  renderTheGame();
}

const changeComplexity = (value) => {
  saveData(CURRENT_GAME_COMPLEXITY, value);
  renderTheGame();
}

const resetGame = () => {
  const { gameType, complexity } = gameData;
  saveData(CURRENT_GAME_TYPE, gameType[0].id);
  saveData(CURRENT_GAME_COMPLEXITY, complexity[0].id);

  renderTheGame();
}

export { changeComplexity, changeOpponents, resetGame } 
