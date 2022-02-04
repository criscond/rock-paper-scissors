import { createElement } from '../services';

const scoreBoardSection = () => {
  const section = createElement({ htmlTag: 'section', className: 'column', ariaLable: 'The score board section' });
  const score = createElement({ htmlTag: 'span', id: 'score', className: 'score', ariaLabel: 'the score' });
  score.innerHTML = '-= Score Board =-';
  section.appendChild(score);

  return section;
}

export default scoreBoardSection;
