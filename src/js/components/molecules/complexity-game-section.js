import { gameData } from '../../data';
import { createElement } from '../services';
import { changeComplexity, getCurrentComplexity } from '../../game';
import select from '../atoms/select';
import text from '../atoms/text';

const gameComplexityOptions = () => {
  const { complexity } = gameData;

  const section = createElement({
    htmlTag: 'section',
    ariaLabel: "Game complexity section"
  });

  const currentComplexity = getCurrentComplexity();

  const selectList = select({
    items: complexity,
    id: 'gameComplexity',
    ariaLabel: 'Game complexity selector',
    selectedItemId: currentComplexity,
    onChange: changeComplexity,
  })

  section.appendChild(text({ htmlTag: 'span', value: 'Game complexity: ' }));
  section.appendChild(selectList);

  return section;
}

export default gameComplexityOptions;
