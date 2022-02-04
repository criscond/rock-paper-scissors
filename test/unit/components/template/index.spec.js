import renderTheGame from '../../../../src/js/components/template';
describe('Template', () => {

  it('should create the template', () => {
    const template = renderTheGame();

    expect(template).toMatchSnapshot();
  });
});
