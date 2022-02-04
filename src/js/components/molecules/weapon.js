import { createElement } from '../services';
import text from '../atoms/text';

const weapon = (item, onClick) => {
  const div = createElement({
    htmlTag: 'div',
    className: item.toLowerCase(),
    role: 'option'
  });

  div.appendChild(text({ htmlTag: 'h3', value: item }));
  div.addEventListener("click", () => onClick(item));

  return div;
}

export default weapon;
