import { ADD, SUB, ActionTypes } from './types';

export const addMethod = (): ActionTypes => (
  { type: ADD, value: 1 }
);

export const subMethod = (): ActionTypes =>  (
  { type: SUB, value: 1 }
);