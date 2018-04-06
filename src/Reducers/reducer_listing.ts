import {FETCH_LISTING} from '../Actions/index';

export default function(state: any = [], action: any){
    switch(action.type){
        case FETCH_LISTING:
        console.log('Action received - fetch Listing', action);
        return [action.payload.data, ...state];
        default:
        // console.log('defaulted message from reducer_listing');
    }
    return state;
}