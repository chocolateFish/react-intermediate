import { holesLength } from 'reducers/reducers';

export const START_GAME = 'START_GAME';
export const ALTER_HOLES = 'ALTER_HOLES';
export const END_GAME = 'END_GAME';
export const INCREMENT_SCORE = 'INCREMENT_SCORE';

const startGame = () => {
  return {
    type: START_GAME
  };
};

const alterHoles = (holeState) => {
  return {
    type: ALTER_HOLES,
    holeState: holeState
  };
};

const endGame = () =>{
  return {
    type: END_GAME
  };
};

const incrementScore = (scoreCount) => {
  return {
    type: INCREMENT_SCORE,
    scoreCount: scoreCount
  };
};

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

const increment = (score) => {
  return ++score;
};

export const startGameAction = () => {
  return (dispatch, getState) => {
    dispatch(startGame());

    let newState = getState().game.holeState.slice(0);
    newState[getRandomInt(0, holesLength)] = true;
    dispatch(alterHoles(newState));
  };
};

export const endGameAction = () => {
  return (dispatch) => {
    dispatch(endGame());
  };
};

export const clickFrogAction = (frogId) => {
  return (dispatch, getState) => { // get current state
    //copy the array, hide frog, dispatch the new state
    let newState = getState().game.holeState.slice(0);
    newState[frogId] = false; 
    dispatch(alterHoles(newState));

    //get count and increment
    let newCount = increment(getState().game.scoreCount);
    dispatch(incrementScore(newCount));

    setTimeout(
      () => {
        let newerState = newState.slice(0);
        newerState[getRandomInt(0, holesLength)] = true;
        dispatch(alterHoles(newerState));
      },
      700
    );
  };
};
