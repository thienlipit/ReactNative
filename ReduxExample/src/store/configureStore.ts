import { combineReducers, configureStore } from '@reduxjs/toolkit';
import numberReducer from '../screen/addNumberScreen/redux/reducer';
import counterNumberReducer from '../screen/counter/redux/reducer';
import { RootState } from './RootState';

const rootReducer = combineReducers<RootState>({
  number: numberReducer,
  count: counterNumberReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
