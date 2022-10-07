import { increment, decrement, counterActionTypes } from './types';

const initialState = 0;

const counterNumberReducer = (state = initialState, action: counterActionTypes) => {
    let temp = state;

    switch (action.type) {
        case increment:
            temp = temp + action.value;
            return temp;

        case decrement:
            temp = temp - action.value;
            return temp;

        default:
            return state;
    }
};

export default counterNumberReducer;