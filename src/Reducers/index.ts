import { combineReducers } from 'redux';
import ListingReducer from './reducer_listing';
import ItemReducer from './reducer_item';
import FranchiseReducer from './reducer_franchise';

const rootReducer = combineReducers({
    listing: ListingReducer,
    item: ItemReducer,
    franchise: FranchiseReducer
});

export default rootReducer;