import {FETCH_ITEM} from '../Actions/index';

export default function(state: any = [], action: any){
    switch(action.type){
        case FETCH_ITEM:
        console.log('Action received - fetch Item', action);
        return [action.payload.data, ...state];
        default:
        // console.log('defaulted message from reducer_listing');
    }
    return state;
}