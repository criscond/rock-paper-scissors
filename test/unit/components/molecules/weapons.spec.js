import weapons from '../../../../src/js/components/molecules/weapons';
describe('Weapons', () => {

	it('should create a element', () => {
		expect(weapons()).toMatchSnapshot();
	});
});
