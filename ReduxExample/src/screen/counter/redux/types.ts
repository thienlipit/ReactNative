export const increment = 'increment';
export const decrement = 'decrement';

interface incrementAction {
    type: typeof increment
    value: number
}

interface decrementAction {
    type: typeof decrement
    value: number
}

export type counterActionTypes = incrementAction | decrementAction;