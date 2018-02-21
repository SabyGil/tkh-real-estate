import { combineReducers } from 'redux';
import ListingsReducer from './reducer_listings_data';
import FilterReducer from './reducer_filter';
// import DefaultData from './reducer_initial_state';
import DefaultData from './reducer_global_state';

const rootReducer = combineReducers({
  listingsData: ListingsReducer,
  filteredData: FilterReducer,
  globalState: DefaultData
});

export default rootReducer;
