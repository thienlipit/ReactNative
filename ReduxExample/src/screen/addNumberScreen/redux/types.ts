export const ADD = 'ADD';
export const SUB = 'SUB';

interface AddAction {
  type: typeof ADD
  value: number
}

interface SubAction {
  type: typeof SUB
  value: number
}

export type ActionTypes = AddAction | SubAction;