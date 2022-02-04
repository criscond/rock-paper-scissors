import { gameData } from '../../data';
import { createElement } from '../services';
import { getMaxNoOfWeapons } from '../../game';
import { makeTheChalenge } from '../../game';
import weapon from './weapon';

const weapons = () => {
  const { weapons } = gameData;
  const weaponsContainer = createElement({
    htmlTag: 'div',
    className: 'weapons',
    ariaLabel: 'Weapon selector',
    role: 'listbox'
  });

  const maxNoOfWeapons = getMaxNoOfWeapons();

  weapons.map((item, key) => {
    if (key < maxNoOfWeapons) {
      weaponsContainer.appendChild(weapon(item, makeTheChalenge));
    }
  });

  return weaponsContainer;
}

export default weapons;
