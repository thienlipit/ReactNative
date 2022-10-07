import { increment, decrement, counterActionTypes } from './types';

export const incrementMethod = (): counterActionTypes => (
    { type: increment, value: 1 }
);

export const decrementMethod = (): counterActionTypes => (
    { type: decrement, value: 1 }
);