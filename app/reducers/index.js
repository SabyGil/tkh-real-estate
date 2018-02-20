import { combineReducers } from 'redux';
import ListingsReducer from './reducer_listings_data';
import FilterReducer from './reducer_filter_listings';

const rootReducer = combineReducers({
  listingsData: ListingsReducer,
  filteredData: FilterReducer
});

export default rootReducer;
