import { combineReducers } from 'redux';
import ListingsReducer from './reducer_listings_data';

const rootReducer = combineReducers({
  listingsData: ListingsReducer
});

export default rootReducer;
