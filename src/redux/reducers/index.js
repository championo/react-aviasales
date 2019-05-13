import { combineReducers } from 'redux';
import ticketsReducer from './ticketsReducer';
import filtersReducer from './filtersReducer';

export default combineReducers({
  tickets: ticketsReducer,
  filters: filtersReducer
});