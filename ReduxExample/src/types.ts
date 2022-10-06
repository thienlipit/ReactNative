export const ADD = 'ADD';
export const SUB = 'SUB';

// export interface Todo {
//   id: number;
//   text: string;
//   completed: boolean;
// }

interface AddAction {
  type: typeof ADD
  value: number
}

interface SubAction {
  type: typeof SUB
  value: number
}

export interface RootState {
  todos: number;

}

export type ActionTypes = AddAction | SubAction ;