const initGameType = require('../../../src/js/game/init').__get__('initGameType');
const initGameRules = require('../../../src/js/game/init').__get__('initGameRules');
const getWeaponNeighbours = require('../../../src/js/game/init').__get__('getWeaponNeighbours');
const updateRule = require('../../../src/js/game/init').__get__('updateRule');
const createGameRules = require('../../../src/js/game/init').__get__('createGameRules');

import { initiateTheGame } from '../../../src/js/game/init';
import { getSavedData } from '../../../src/js/game/localstorage';
import { LOCALSTORAGE } from '../../../src/js/constants';
import mockedGameRules from '../mock/rules';

const { CURRENT_GAME_TYPE, RULES } = LOCALSTORAGE;

describe('Game Init', () => {

  beforeEach(() => {
    localStorage.clear();
  })

  it('should initiate the game', () => {
    let currentGameType = getSavedData(CURRENT_GAME_TYPE);

    initiateTheGame();

    currentGameType = getSavedData(CURRENT_GAME_TYPE);
    expect(currentGameType).toEqual('1');
  });

  it('should initiate the game type', () => {
    let currentGameType = getSavedData(CURRENT_GAME_TYPE);
    expect(currentGameType).toBeNull();

    initGameType();

    currentGameType = getSavedData(CURRENT_GAME_TYPE);
    expect(currentGameType).toEqual('1');
  });

  it('should initiate the game rules', () => {
    let rules = getSavedData(RULES);
    expect(rules).toBeNull();

    initGameRules();

    rules = getSavedData(RULES);
    expect(rules).toEqual(mockedGameRules);
  });

  it('should give the closer weapons', () => {
    const result = getWeaponNeighbours(0);

    expect(result.left).toEqual(4);
    expect(result.right).toEqual(1);
  });

  it('should update the winning rule', () => {
    let rule = {
      winsAgainst: [],
      losesAgainst: []
    };

    const winnerId = 1;
    const loserId = 3;

    rule = updateRule(rule, winnerId, loserId);

    expect(rule.winsAgainst).toContain(3);
    expect(rule.losesAgainst).toContain(1);
  });

  it('should create the rules of the game', () => {
    const rules = createGameRules();

    expect(rules).toEqual(JSON.parse(mockedGameRules));
  });
});
