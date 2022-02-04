import { gameData } from '../data';
import { getSavedData } from '.';
import { LOCALSTORAGE } from '../constants';

const { CURRENT_GAME_COMPLEXITY, CURRENT_GAME_TYPE } = LOCALSTORAGE;

const getCurrentComplexity = () => {
  const { complexity } = gameData;

  return parseInt(getSavedData(CURRENT_GAME_COMPLEXITY) || complexity[0].id);
}

const getCurrentGameType = () => {
  const { gameType } = gameData;

  return parseInt(getSavedData(CURRENT_GAME_TYPE) || gameType[0].id);
}

export { getCurrentComplexity, getCurrentGameType } 
