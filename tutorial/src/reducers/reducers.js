import { combineReducers } from 'redux';
import { START_GAME, ALTER_HOLES, END_GAME, INCREMENT_SCORE } from 'actions/actions';

export const holesLength = 5;

const initialGameState = {
  holeState: Array(holesLength).fill(false),
  isGameActive: false,
  scoreCount: 0
};

const game = (state = initialGameState, action) => {
  switch (action.type) {
  case START_GAME:
    return Object.assign({}, state, {
      isGameActive: true
    });
  case ALTER_HOLES:
    return Object.assign({}, state, {
      holeState: action.holeState
    });
  case END_GAME:
    return Object.assign({}, state=initialGameState, {
    });
  case INCREMENT_SCORE:
    return Object.assign({}, state, {
      scoreCount: action.scoreCount
    });
  default:
    return state;
  }
};

export default combineReducers({
  game
});
