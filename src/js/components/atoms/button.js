import { createElement } from '../services';

const button = ({ className = null, id = null, innerText = '', ariaLabel = null, role = null, onClick }) => {
  const element = createElement({ htmlTag: 'button', className, id, ariaLabel, role });
  element.innerText = innerText;
  element.type = 'button';
  element.addEventListener('click', () => onClick());

  return element;
}

export default button;
