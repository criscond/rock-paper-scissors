import headerMenu from '../../../../src/js/components/molecules/header-menu';
describe('Header Menu', () => {

	it('should create a menu', () => {
		expect(headerMenu()).toMatchSnapshot();
	});
});
