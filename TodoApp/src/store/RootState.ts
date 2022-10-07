import { Filter } from '../screens/filters/types';
import { Todo } from '../screens/todos/redux/types';

export interface RootState {
  todos: Todo[]
  filter: Filter
}