import {FETCH_FRANCHISE} from '../Actions/index';
import { ApiGetAction } from '../Interfaces/interfaces.d';

export default function(state: any = [], action: ApiGetAction) {
    switch(action.type) {
        case FETCH_FRANCHISE:
        debugger;
            return Object.assign(
                {}, 
                state,
                [action.payload.data, ...state]
            );
        default:
            return state;
    }
}