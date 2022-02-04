import anchor from '../../../../src/js/components/atoms/anchor';
describe('Anchor', () => {

  it('should create an anchor', () => {
    const data = {
      name: 'GitLab',
      url: 'https://www.gitlab.com/',
      rel: 'external'
    }
    const link = anchor(data);

    expect(link.href).toEqual(data.url);
    expect(link.rel).toEqual(data.rel);
    expect(link.text).toEqual(data.name);
    expect(link.title).toEqual(`The ${data.name} page of the project`);
  });

});
