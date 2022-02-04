import resetGameSection from '../../../../src/js/components/molecules/reset-game-section';
describe('Reset Game Section', () => {

	it('should create a section', () => {
		expect(resetGameSection()).toMatchSnapshot();
	});

});
