import { combineReducers } from 'redux';
import ListingReducer from './reducer_listing';
import ItemReducer from './reducer_item';
import FranchiseReducer from './reducer_franchise';
import DetailReducer from './reducer_detail';

const rootReducer = combineReducers({
    listing: ListingReducer,
    item: ItemReducer,
    franchise: FranchiseReducer,
    detail: DetailReducer,
});

export default rootReducer;