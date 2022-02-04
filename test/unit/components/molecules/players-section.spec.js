import playersSection from '../../../../src/js/components/molecules/players-section';
describe('Players Section', () => {

	it('should create a section', () => {
		expect(playersSection()).toMatchSnapshot();
	});
});
