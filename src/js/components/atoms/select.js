import { createElement } from '../services';

const select = ({ id, ariaLabel, items, selectedItemId, onChange }) => {
  const element = createElement({
    htmlTag: 'select',
    id,
    ariaLabel,
  });

  items.map((item) => {
    const { id, name } = item;
    var option = createElement({ htmlTag: 'option', ariaLabel: name });
    option.value = id;
    option.text = name;
    option.selected = false;
    if (selectedItemId === id) {
      option.selected = true;
    }
    element.appendChild(option);
  });

  element.addEventListener('change', () => onChange(element.value));

  return element;
}

export default select;
