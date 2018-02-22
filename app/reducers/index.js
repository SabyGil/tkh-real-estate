import { combineReducers } from 'redux';
import ListingsReducer from './reducer_listings_data';
// import FilterReducer from './reducer_filter';
// import DefaultData from './reducer_initial_state';
// import DefaultData from './reducer_global_state';
// import PracticeData from './reducer_practice';
import { globalState } from './reducer_practice';

const rootReducer = combineReducers({
  listingsData: ListingsReducer,
  // filteredData: FilterReducer,
  // globalState: DefaultData
  globalState
});

export default rootReducer;
