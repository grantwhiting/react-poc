import { UPDATE_FRANCHISE_CART, REMOVE_FRANCHISE_CART } from '../Actions/index';

// function getCookieValues(): string[] {
//     var arr: string[] = [];
//     document.cookie.split(/; */).forEach((item: string) => {
//         arr.push(item.substr(item.indexOf('=') + 1));
//     });
//     return arr;
// }

const initialState = ['franch 1', 'franch 2'];

export default function(state: any = initialState, action: any) {
    switch(action.type) {
        case UPDATE_FRANCHISE_CART:
            return [...state, action.data];
        case REMOVE_FRANCHISE_CART:
            const arrayWithNameRemoved = state.map((item: string) => {
                return item !== action.data;
            });
            
            return [...state, arrayWithNameRemoved];
        default:
            return state;
    }
}