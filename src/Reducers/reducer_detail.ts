import {FETCH_DETAIL} from '../Actions/index';

export default function(state: any = {}, action: any) {
    switch(action.type) {
        case FETCH_DETAIL:
            // return [action.payload.data];
            // console.log(action.payload.data[0].name, 'FETCH_DETAIL DATA');
            return {...state, [action.payload.data[0].shortName]: action.payload.data};
            
        default:
            return state;
    }
}