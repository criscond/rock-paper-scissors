import weaponsSection from '../../../../src/js/components/molecules/weapons-section';
describe('Weapons Section', () => {

	it('should create a section', () => {
		expect(weaponsSection()).toMatchSnapshot();
	});
});
