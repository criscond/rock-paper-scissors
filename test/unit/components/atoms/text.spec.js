import text from '../../../../src/js/components/atoms/text';
describe('Text', () => {

  it('should create a text element', () => {
    const data = {
      htmlTag: 'h1',
      value: 'Hello'
    }
    const element = text(data);

    expect(element).toMatchSnapshot();
  });

  it('should create a text element with class', () => {
    const data = {
      ...data,
      className: 'h1-class'
    }
    const element = text(data);

    expect(element.className).toEqual(data.className);
  });
});
