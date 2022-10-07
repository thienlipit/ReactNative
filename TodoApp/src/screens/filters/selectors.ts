import { Filter } from './types';
import { RootState } from '../../store/RootState';

export const selectFilter = (state: RootState): Filter => state.filter;
