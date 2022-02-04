import { createElement } from '../services';

const link = ({ name, url, rel }) => {
  const element = createElement({ htmlTag: 'a', ariaLabel: `The ${name} page` });
  element.href = url;
  element.text = name;
  element.title = `The ${name} page of the project`;
  element.target = '_blank';
  element.rel = rel;

  return element;
}

export default link;
