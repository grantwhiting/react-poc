import {FETCH_FRANCHISE} from '../Actions/index';

export default function(state: any = [], action: any) {
    switch(action.type) {
        case FETCH_FRANCHISE:
            return [...state,
                Object.assign({}, action.payload.data)
            ];
        default:
            return state;
    }
}