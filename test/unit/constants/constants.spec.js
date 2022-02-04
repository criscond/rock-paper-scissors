import { LOCALSTORAGE } from '../../../src/js/constants';
describe('Constants', () => {

  it('should get the localStorage keys', () => {
    const expected = {
      CURRENT_GAME_COMPLEXITY: 'game-complexity',
      CURRENT_GAME_TYPE: 'game-type',
      RULES: 'game-rules'
    }

    expect(LOCALSTORAGE).toEqual(expected);
  });
});
