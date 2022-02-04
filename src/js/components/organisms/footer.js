import { copyright } from '../../data';
import { createElement } from '../services';

const footer = () => {
  const element = createElement({ htmlTag: 'footer' });
  const paragraph = createElement({ htmlTag: 'p' });
  const year = new Date().getFullYear();
  paragraph.innerHTML = `© ${year} ${copyright}`;
  element.appendChild(paragraph);

  return element;
}

export default footer;
