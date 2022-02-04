import { createElement } from '../services';

const text = ({ htmlTag, value, className = '' }) => {

  const element = createElement({ htmlTag });
  element.className = className;
  element.innerHTML = value;

  return element;
}

export default text;
