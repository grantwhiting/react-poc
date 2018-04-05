import {FETCH_ITEM} from '../Actions/index';
import { IApiGetAction } from '../Interfaces/interfaces.d';

export default function(state: any = [], action: IApiGetAction){
    switch(action.type){
        case FETCH_ITEM:
        console.log('Action received - fetch Item', action);
        return [action.payload.data, ...state];
        default:
        // console.log('defaulted message from reducer_listing');
    }
    return state;
}