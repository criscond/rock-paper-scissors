import { gameData } from '../data';
import { getCurrentComplexity } from '.'

const getWeaponId = (weaponName) => {
  const { weapons } = gameData;

  return weapons.indexOf(weaponName);
}

const getWeaponName = (weaponId) => {
  const { weapons } = gameData;

  return weapons.slice(weaponId)[0];
}

const getMaxNoOfWeapons = () => {
  const { complexity } = gameData;
  const currentComplexity = getCurrentComplexity();

  return complexity[currentComplexity - 1].noOfWeapons;
}

const generateRandomWeaponId = () => Math.floor(Math.random() * getMaxNoOfWeapons());

export { generateRandomWeaponId, getMaxNoOfWeapons, getWeaponId, getWeaponName }
