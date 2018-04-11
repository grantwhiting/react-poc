import { combineReducers } from 'redux';
import ListingReducer from './reducer_listing';
import ItemReducer from './reducer_item';
import FranchiseReducer from './reducer_franchise';
import DetailReducer from './reducer_detail';
import FranchiseCart from './reducer_franchiseCart';

const rootReducer = combineReducers({
    listing: ListingReducer,
    item: ItemReducer,
    franchises: FranchiseReducer,
    detail: DetailReducer,
    franchiseCart: FranchiseCart
});

export default rootReducer;