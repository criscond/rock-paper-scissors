import button from '../../../../src/js/components/atoms/button';
describe('Button', () => {
  const onClickMock = jest.fn();

  const data = {
    className: 'GitLab',
    id: 'buttonId',
    innerText: 'innerText',
    ariaLabel: 'This is a button',
    role: 'Note',
    onClick: onClickMock,
  }

  it('should render a button', () => {
    const element = button({ onlClick: null });

    expect(element).toMatchSnapshot();
  });

  it('should render a button with attributes', () => {
    const element = button(data);

    expect(element.className).toEqual(data.className);
    expect(element.id).toEqual(data.id);
    expect(element.innerText).toEqual(data.innerText);
    expect(element.ariaLabel).toEqual(data.ariaLabel);
    expect(element.getAttribute('role')).toEqual(data.role);
  });

  it('should dispatch a click event', () => {
    const element = button(data);
    const documentClickEvent = new Event('click');
    element.dispatchEvent(documentClickEvent);

    expect(onClickMock).toHaveBeenCalled();
  });
});
