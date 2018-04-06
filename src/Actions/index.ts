import axios from 'axios';

const LIST_API_DATA = './data.json';
const ITEM_API_DATA = './listing.json';
const FRANCHISE_API_DATA = 'http://api-main.dev.bizbuysell.com/franchise/api/franchise/';
// const API_TEST = 'https://api.coinmarketcap.com/v1/ticker/?limit=20'

export const FETCH_LISTING = 'FETCH_LISTING';
export const FETCH_ITEM = 'FETCH_ITEM';
export const FETCH_FRANCHISE = 'FETCH_FRANCHISE';
export const FETCH_DETAIL = 'FETCH_DETAIL';


export function fetchListing(): any {
    const request = axios.get(LIST_API_DATA);
    // console.log('request from actions index.js',request)
    return {
        type: FETCH_LISTING,
        payload: request
    };
}

export function fetchItem(): any {
    const request = axios.get(ITEM_API_DATA);
    return {
        type: FETCH_ITEM,
        payload: request
    };
}

export function fetchFranchise(): any {
    
    const request: any = axios.get(FRANCHISE_API_DATA)
    .then((response) => {
        return response;
    });
    return {
        type: FETCH_FRANCHISE,
        payload: request,
    };
}

export function fetchDetail(id: number): any {
    // console.log(`${FRANCHISE_API_DATA}${id}`, 'request');
    const request: any = axios.get(`${FRANCHISE_API_DATA}${id}`)
        .then((response) => {
            return response;
        });
    // console.log('request from fetchDetail',request);

    return {
        type: FETCH_DETAIL,
        payload: request
    };
}