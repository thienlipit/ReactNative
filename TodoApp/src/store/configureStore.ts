import { Store, combineReducers, createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit'

import { RootState } from './types';
import filterReducer from './filters/reducer';
import todosReducer from './todos/reducer';

// const rootReducer = combineReducers<RootState>({
//   todos: todosReducer,
//   filter: filterReducer,
// });


export const store = configureStore({
  reducer: {
    todos: todosReducer,
    filter: filterReducer,
  },
})


// const configureStore = (): Store => {
//   return createStore(rootReducer);
// };

// export default configureStore;