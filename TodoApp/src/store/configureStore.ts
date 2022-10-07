import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import { RootState } from './RootState';
import filterReducer from '../screens/filters/reducer';
import todosReducer from '../screens/todos/redux/reducer';

const rootReducer = combineReducers<RootState>({
  todos: todosReducer,
  filter: filterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});