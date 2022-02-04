import { gameData } from '../../data';
import { createElement } from '../services';
import text from '../atoms/text';
import gameComplexitySection from '../molecules/complexity-game-section';
import simulationSection from '../molecules/simulation-section';
import scoreBoardSection from '../molecules/score-board-section';
import playersSection from '../molecules/players-section';
import resetGameSection from '../molecules/reset-game-section';
import weaponsSection from '../molecules/weapons-section';
import { getCurrentGameType } from '../../game';

const main = () => {
  const { name } = gameData;
  const currentGameType = getCurrentGameType();
  const element = createElement({ htmlTag: 'main' });
  element.appendChild(text({ htmlTag: 'h1', value: name }));
  element.appendChild(gameComplexitySection());
  element.appendChild(playersSection());
  element.appendChild(scoreBoardSection());
  currentGameType === 1
    ? element.appendChild(weaponsSection())
    : element.appendChild(simulationSection());
  element.appendChild(resetGameSection());

  return element;
}

export default main;
