import { configureStore } from '@reduxjs/toolkit'
import numberReducer from './reducer';


export const store = configureStore({
  reducer: {
    todos: numberReducer
  },
})
