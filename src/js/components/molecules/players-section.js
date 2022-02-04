import { gameData } from '../../data';
import { createElement } from '../services';
import select from '../atoms/select';
import text from '../atoms/text';
import { changeOpponents, getCurrentGameType } from '../../game';

const playersSection = () => {
  const { gameType } = gameData;
  let currentGameType = getCurrentGameType();

  const section = createElement({
    htmlTag: 'section',
    ariaLabel: 'Game type section'
  });

  const selectList = select({
    items: gameType,
    id: 'gameType',
    ariaLabel: 'Game type selector',
    selectedItemId: currentGameType,
    onChange: changeOpponents,
  })

  section.appendChild(text({
    htmlTag: 'span',
    value: 'Select the opponents: '
  }));
  section.appendChild(selectList);

  return section;
}

export default playersSection;
