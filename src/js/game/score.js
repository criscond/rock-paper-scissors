import {
  generateRandomWeaponId,
  getCurrentGameType,
  getSavedData,
  getWeaponId,
  getWeaponName,
} from '.';
import { LOCALSTORAGE } from '../constants';
const { RULES } = LOCALSTORAGE;

const displayScore = (result) => document.getElementById('score').innerHTML = result;

const getWeaponIds = (playerOneWeapon, playerTwoWeapon) => {

  let playerOneWeaponId;
  let playerTwoWeaponId;

  playerOneWeapon
    ? playerOneWeaponId = getWeaponId(playerOneWeapon)
    : playerOneWeaponId = generateRandomWeaponId();

  playerTwoWeapon
    ? playerTwoWeaponId = getWeaponId(playerTwoWeapon)
    : playerTwoWeaponId = generateRandomWeaponId();

  return { playerOneWeaponId, playerTwoWeaponId };
}

const makeTheChalenge = (playerOneWeapon = null, playerTwoWeapon = null) => {
  const { playerOneWeaponId, playerTwoWeaponId } = getWeaponIds(playerOneWeapon, playerTwoWeapon);

  displayScore(getScore(playerOneWeaponId, playerTwoWeaponId));
}

const getScore = (playerOneWeaponId, playerTwoWeaponId) => {
  const playerOneWeaponName = getWeaponName(playerOneWeaponId);
  const playerTwoWeaponName = getWeaponName(playerTwoWeaponId);

  const rules = JSON.parse(getSavedData(RULES))[playerOneWeaponId];
  const currentGameType = getCurrentGameType();

  let score;
  let winner;

  if (playerOneWeaponId === playerTwoWeaponId) {
    score = `It is TIE: ${playerOneWeaponName} vs ${playerTwoWeaponName}`;
  }
  else if (rules.losesAgainst.includes(playerTwoWeaponId)) {
    score = `Player 2 wins: ${playerTwoWeaponName} beats ${playerOneWeaponName}`;
  }
  else {
    winner = currentGameType === 1 ? 'Congrats, <b>YOU WIN</b>' : 'Player 1 wins';
    score = `${winner}: ${playerOneWeaponName} beats ${playerTwoWeaponName}`;
  }

  return score;
}

export { makeTheChalenge }
