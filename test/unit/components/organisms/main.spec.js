import main from '../../../../src/js/components/organisms/main';
import { saveData } from '../../../../src/js/game/localstorage';
import { LOCALSTORAGE } from '../../../../src/js/constants';
const { CURRENT_GAME_TYPE } = LOCALSTORAGE;
describe('Main', () => {

  it('should create the main with weapons section', () => {
    const element = main();

    expect(element).toMatchSnapshot();
  });

  it('should create the main with simulation section', () => {
    saveData(CURRENT_GAME_TYPE, 2);
    const element = main();

    expect(element).toMatchSnapshot();
  });
});
