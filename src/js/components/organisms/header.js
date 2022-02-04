import { createElement } from '../services';
import headerMenu from '../molecules/header-menu';

const header = () => {
  const element = createElement({ htmlTag: 'header' });
  element.appendChild(headerMenu());

  return element;
}

export default header;
