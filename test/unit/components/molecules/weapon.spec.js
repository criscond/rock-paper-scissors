import weapon from '../../../../src/js/components/molecules/weapon';
describe('Weapon', () => {

  const weaponName = 'Paper';
  it('should create a element', () => {
    expect(weapon(weaponName)).toMatchSnapshot();
  });

  it('should create the weapon title', () => {
    const element = weapon(weaponName);

    expect(element.innerHTML).toContain('h3');
  });

  it('should dispatch a click event', () => {
    const onClickMock = jest.fn();

    const element = weapon(weaponName, onClickMock);
    const documentClickEvent = new Event('click');
    element.dispatchEvent(documentClickEvent);

    expect(onClickMock).toHaveBeenCalled();
  });
});
