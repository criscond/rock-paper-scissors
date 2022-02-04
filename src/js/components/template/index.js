import header from '../organisms/header';
import main from '../organisms/main';
import footer from '../organisms/footer';

const renderTheGame = () => {
  const body = document.querySelector('body');
  body.innerHTML = '';
  body.appendChild(header());
  body.appendChild(main());
  body.appendChild(footer());
}

export default renderTheGame;
