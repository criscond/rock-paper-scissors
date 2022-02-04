import { createElement } from '../services';
import text from '../atoms/text';
import weapons from './weapons';

const weaponsSection = () => {
  const section = createElement({
    htmlTag: 'section',
    className: 'column',
    ariaLabel: 'Weapons section'
  });

  section.appendChild(text({ htmlTag: 'h2', value: 'Choose your weapon' }));
  section.appendChild(weapons());

  return section;
}

export default weaponsSection;
