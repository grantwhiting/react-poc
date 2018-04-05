import { combineReducers } from 'redux';
import ListingReducer from './reducer_listing';
import ItemReducer from './reducer_item';

const rootReducer = combineReducers({
    listing: ListingReducer,
    item: ItemReducer
});

export default rootReducer;