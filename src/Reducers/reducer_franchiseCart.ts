import { UPDATE_FRANCHISE_CART, REMOVE_FRANCHISE_CART } from '../Actions/index';

// function getCookieValues(): string[] {
//     var arr: string[] = [];
//     document.cookie.split(/; */).forEach((item: string) => {
//         arr.push(item.substr(item.indexOf('=') + 1));
//     });
//     return arr;
// }

const initialState = {
    arr: ['franchise 1', 'franchise 2']
};

export default function(state: any = initialState, action: any) {
    switch(action.type) {
        case UPDATE_FRANCHISE_CART:
            return {
                ...state,
                arr: [...state.arr, action.data]
            };
        case REMOVE_FRANCHISE_CART:
            return {
                ...state,
                arr: state.arr.filter((item: string) => item !== action.data)
            };
        default:
            return state;
    }
}