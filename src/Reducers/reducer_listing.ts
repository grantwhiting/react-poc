import {FETCH_LISTING} from '../Actions/index';
import { IApiGetAction } from '../Interfaces/interfaces';

export default function(state: any = [], action: IApiGetAction){
    switch(action.type){
        case FETCH_LISTING:
        console.log('Action received - fetch Listing', action);
        debugger;
        return [action.payload.data, ...state];
        default:
        // console.log('defaulted message from reducer_listing');
    }
    return state;
}