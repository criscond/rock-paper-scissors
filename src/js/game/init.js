import { gameData } from '../data';
import { getCurrentGameType, saveData } from '.';
import { LOCALSTORAGE } from '../constants'

const { CURRENT_GAME_TYPE, RULES } = LOCALSTORAGE;

const initiateTheGame = () => {
  initGameType();
  initGameRules();
}

const initGameType = () => {
  const currentGameType = getCurrentGameType();
  saveData(CURRENT_GAME_TYPE, currentGameType);
}

const initGameRules = () => saveData(RULES, JSON.stringify(createGameRules()));

const getWeaponNeighbours = (index) => {
  let { weapons } = gameData;

  let leftIndex = index - 1;
  let rightIndex = index + 1;

  if (rightIndex >= weapons.length) {
    rightIndex = rightIndex - weapons.length;
  }

  if (leftIndex === weapons.length) {
    rightIndex = leftIndex - rightIndex - 1;
  }

  if (leftIndex < 0) {
    leftIndex = weapons.length + leftIndex;
  }

  return {
    left: leftIndex,
    right: rightIndex
  }
}

const updateRule = (rule, winnerId, loserId = null) => {
  if (loserId !== null) {
    !rule.winsAgainst.includes(loserId) && rule.winsAgainst.push(loserId);
  }

  if (winnerId !== null) {
    !rule.losesAgainst.includes(winnerId) && rule.losesAgainst.push(winnerId);
  }

  return rule;
}

const createGameRules = () => {
  let { weapons } = gameData;
  let probe;
  let rules = {};

  const half = (weapons.length - 1) / 2;

  weapons.map((key, index) => {
    let rule = {
      winsAgainst: [],
      losesAgainst: []
    };

    probe = getWeaponNeighbours(index);
    rule = updateRule(rule, probe.left, probe.right);

    probe = getWeaponNeighbours(index - half);
    rule = updateRule(rule, probe.left);

    probe = getWeaponNeighbours(index + half);
    rule = updateRule(rule, null, probe.right);

    rules[index] = {
      id: index,
      name: key,
      ...rule,
    }
  });

  return rules;
}

export { initiateTheGame };
