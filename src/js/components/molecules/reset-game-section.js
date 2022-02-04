import { createElement } from '../services';
import button from '../atoms/button';
import { resetGame } from '../../game'

const resetGameSection = () => {
  const section = createElement({
    htmlTag: 'section',
    className: 'column'
  });

  section.appendChild(
    button({
      id: 'resetGame',
      ariaLabel: 'Reset button',
      innerText: 'Reset The Game',
      onClick: resetGame,
    })
  );

  return section;
}

export default resetGameSection;
