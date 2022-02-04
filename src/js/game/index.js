import { initiateTheGame } from './init'
import { changeComplexity, changeOpponents, resetGame } from './actions';
import { getSavedData, saveData } from './localstorage';
import { getCurrentComplexity, getCurrentGameType } from './rules';
import { makeTheChalenge } from './score';
import { getMaxNoOfWeapons, generateRandomWeaponId, getWeaponId, getWeaponName } from './weapons';

export {
  changeComplexity,
  changeOpponents,
  generateRandomWeaponId,
  getCurrentComplexity,
  getCurrentGameType,
  getMaxNoOfWeapons,
  getSavedData,
  getWeaponId,
  getWeaponName,
  initiateTheGame,
  makeTheChalenge,
  resetGame,
  saveData,
}
