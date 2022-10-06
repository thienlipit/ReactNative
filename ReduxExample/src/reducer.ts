import { ADD, SUB, ActionTypes } from './types';

const initialState = 0;

const numberReducer = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
  case ADD:
    return (state + 1);
  case SUB:
    return (state - 1);

  default:
    return state;
  }
};

export default numberReducer;