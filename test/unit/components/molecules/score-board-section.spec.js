import scoreBoardSection from '../../../../src/js/components/molecules/score-board-section';
describe('Score Board Section', () => {

	it('should create a section', () => {
		expect(scoreBoardSection()).toMatchSnapshot();
	});
});
