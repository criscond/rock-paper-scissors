import { createElement } from '../services';
import button from '../atoms/button';
import { makeTheChalenge } from '../../game'

const simulationSection = () => {
  const section = createElement({
    htmlTag: 'section',
    className: 'column'
  });

  section.appendChild(
    button({
      id: 'simulateGame',
      ariaLabel: 'Start Simulation',
      innerText: 'Simulate',
      onClick: makeTheChalenge,
    })
  );

  return section;
}

export default simulationSection;
