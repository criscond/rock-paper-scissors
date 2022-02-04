import header from '../../../../src/js/components/organisms/header';
describe('Header', () => {

	it('should create the header', () => {
		expect(header()).toMatchSnapshot();
	});
});
