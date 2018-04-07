import {FETCH_DETAIL} from '../Actions/index';

export default function(state: any = [], action: any) {
    switch(action.type) {
        case FETCH_DETAIL:
            return [action.payload.data];
        default:
            return state;
    }
}