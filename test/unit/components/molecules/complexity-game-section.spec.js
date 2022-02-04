import gameComplexityOptions from '../../../../src/js/components/molecules/complexity-game-section';
describe('Complexity Game Section', () => {

	it('should create a section', () => {
		expect(gameComplexityOptions()).toMatchSnapshot();
	});
});
