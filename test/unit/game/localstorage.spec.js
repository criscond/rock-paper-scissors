import { saveData, getSavedData } from '../../../src/js/game/localstorage';
import mockLocalStorage from '../mock/localstorage';
describe('LocalStorage', () => {

  const key = 'test-key';
  const value = 'test-value';

  it('should save data to localstorage', () => {
    const { setItemMock } = mockLocalStorage();
    saveData(key, value);

    expect(setItemMock).toHaveBeenCalledWith(key, value);
  });

  it('should get data from localstorage', () => {
    const { getItemMock } = mockLocalStorage();
    getSavedData(key);

    expect(getItemMock).toHaveBeenCalledWith(key);
  });

});
