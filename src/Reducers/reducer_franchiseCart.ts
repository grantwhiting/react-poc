import { UPDATE_FRANCHISE_CART, REMOVE_FRANCHISE_CART } from '../Actions/index';

// function getCookieValues(): string[] {
//     var arr: string[] = [];
//     document.cookie.split(/; */).forEach((item: string) => {
//         arr.push(item.substr(item.indexOf('=') + 1));
//     });
//     return arr;
// }

const initialState = {
    arr: []
};

export default function(state: any = initialState, action: any) {
    switch(action.type) {
        case UPDATE_FRANCHISE_CART:
            debugger;
            return Object.assign({}, state, {
                arr: action.data
            });
        case REMOVE_FRANCHISE_CART:
            return [action.data, ...state];
        default:
            return state;
    }
}