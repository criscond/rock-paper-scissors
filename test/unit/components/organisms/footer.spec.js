import footer from '../../../../src/js/components/organisms/footer';
describe('Footer', () => {

	it('should create the footer', () => {
		expect(footer()).toMatchSnapshot();
	});
});
