import { ADD, SUB, ActionTypes } from './types';

const initialState = 0;

const numberReducer = (state = initialState, action: ActionTypes) => {
  let temp = state;

  switch (action.type) {
    case ADD:
      temp = temp + action.value;
      return temp;

    case SUB:
      temp = temp - action.value;
      return temp;

    default:
      return state;
  }
};

export default numberReducer;