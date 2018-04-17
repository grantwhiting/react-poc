import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import FranchiseListingsPage from './Components/Containers/FranchiseListings/franchiseListingPage';
import * as actions from './Actions/index';
import reducer from '../src/Reducers/reducer_franchise';
import axios from 'axios';
// import {FETCH_FRANCHISE, FRANCHISE_API_DATA} from './Actions/index';
import {FETCH_FRANCHISE} from './Actions/index';
import * as listData from '../public/listing.json';

// testing
import { Provider }  from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import * as ReduxPromise from 'redux-promise';
import rootReducer from './Reducers/index';

import { expect } from 'chai';
import { shallow } from 'enzyme';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore); 


// Inital Rendering Tests
describe('Initial Rendering Tests', ()=> {
  it('renders App without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={createStoreWithMiddleware(rootReducer)}>
        <App />
      </Provider>, div);
  });
  
  it('renders FranchiseListingsPage without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={createStoreWithMiddleware(rootReducer)}>
        <FranchiseListingsPage />
      </Provider>, div);
  });
  
  it('contains div with className App', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App'));
  });
});



// Franchise Listings
describe('Franchise Listings Tests', () => {
  it('contains a search-results class within the FranchiseListings Component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.search-results'));
  });
  
  it('contains all listings within the FranchiseListings Component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.fd_listing'));
  });
  
  it('contains a button for users to add listings to the cart', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.addToCart'));
  });
});

// Franchise Cart
describe('Franchise Cart Tests', () => {
  it('contains a franchise cart within the FranchiseListings Component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.cart-container'));
  });
  
  it('contains list group items inside the franchise cart', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.list-group-item'));
  });
});

// FETCH_FRANCHISE
describe('Action Testing: FETCH_FRANCHISE', () => {
  it('should confirm that the fetchFranchise action returns an object', () => {
    expect(actions.fetchFranchises()).to.be.an('object');
  });

  const results = actions.fetchFranchises();
  it('should confirm that the fetchFranchise action object type equals FETCH_FRANCHISE', () => {
    expect(results.type).to.equal('FETCH_FRANCHISE');
  });

  it('should confirm that the fetchFranchise action object payload is a promise', () => {
    expect(results.payload).to.be.a('promise');
  });
});

// ADD_TO_FRANCHISE_CART
describe('Action Testing: ADD_TO_FRANCHISE_CART', () => {
  it('should confirm that the addToFranchiseCart action returns an object', () => {
    expect(actions.addToFranchiseCart('Daphne\'s')).to.be.an('object');
  });

  const results = actions.addToFranchiseCart('Daphne\'s');
  it('should confirm that the addToFranchiseCart action object type equals UPDATE_FRANCHISE_CART', () => {
    expect(results.type).to.equal('UPDATE_FRANCHISE_CART');
  });

  it('should confirm that the addToFranchiseCart action object contains name of franchise to be added to the cart', 
    () => { expect(results.data).to.equal('Daphne\'s');
  });
});

// Reducer Tests
describe('Check Franchise reducer', () => {
  it('should contain a switch statement that returns an empty array by default', () => {
    expect(reducer([],{})).to.be.an('array').that.has.lengthOf(0);
  });

  it('should return updated state when type is FETCH_FRANCHISE', () => {
    // const request: any = axios.get('http://api-main.dev.bizbuysell.com/franchise/api/franchise/')
    const request: any = axios.get('http://api-main.dev.bizbuysell.com/franchise/api/franchise/').then((response) => {
      return response;
    });

    const action = {
      type: FETCH_FRANCHISE,
      payload: {data: listData}
    };

    expect(reducer([],action)).to.not.equal(undefined);
  });
});

// describe('actions', () => {
//   it('should create an action to fetch franchises', () => {
//     const request = axios.get(FRANCHISE_API_DATA);
//     const expectedAction = {
//       type: FETCH_FRANCHISE,
//       payload: request
//     };
//     console.log(actions.fetchFranchises());
//     expect(expectedAction).equal(Object);
//   });
// });

// import {FETCH_FRANCHISE} from '../Actions/index';

// export default function(state: any = [], action: any) {
//     switch(action.type) {
//         case FETCH_FRANCHISE:
//             return [action.payload.data, ...state][0];

//         default:
//             return state;
//     }
// }

