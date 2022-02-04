import { createElement } from '../services';
import { menus } from '../../data';
import anchor from '../atoms/anchor';

const headerMenu = () => {
  const ul = createElement({ htmlTag: 'ul' });
  menus.map((item) => {
    let li = createElement({ htmlTag: 'li' });
    let link = anchor(item);
    li.appendChild(link);
    ul.appendChild(li);
  });

  return ul;
}

export default headerMenu;
