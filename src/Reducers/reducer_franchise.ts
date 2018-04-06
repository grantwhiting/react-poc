import {FETCH_FRANCHISE} from '../Actions/index';

export default function(state: any = [], action: any) {
    switch(action.type) {
        case FETCH_FRANCHISE:
            return [action.payload.data, ...state];

        default:
            return state;
    }
}