import { combineReducers } from 'redux';
import ListingsReducer from './reducer_listings_data';
import FilteredReducer from './reducer_filter';

const rootReducer = combineReducers({
  listingsData: ListingsReducer,
  filteredData: FilteredReducer
});

export default rootReducer;
