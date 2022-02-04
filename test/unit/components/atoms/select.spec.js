import select from '../../../../src/js/components/atoms/select';
describe('Select', () => {
  const onChangeMock = jest.fn();

  const items = [{
    id: 1,
    name: 'Option One'
  }, {
    id: 2,
    name: 'Option Two',
  }, {
    id: 3,
    name: 'Option three'
  }];

  const data = {
    id: 'selectId',
    ariaLabel: 'This is a select',
    items,
    selectedItemId: 2,
    onChange: onChangeMock,
  }

  it('should render a select', () => {
    const element = select(data);

    expect(element).toMatchSnapshot();
  });

  it('should dispatch a change event', () => {
    const element = select(data);
    const documentClickEvent = new Event('change');
    element.dispatchEvent(documentClickEvent);


    expect(onChangeMock).toHaveBeenCalled();
  });
});
