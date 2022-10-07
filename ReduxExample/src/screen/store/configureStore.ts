import { combineReducers, configureStore } from '@reduxjs/toolkit';
import numberReducer from '../addNumberScreen/redux/reducer';
import { RootState } from './RootState';

const rootReducer = combineReducers<RootState>({
  number: numberReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
