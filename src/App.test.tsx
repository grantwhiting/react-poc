import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import FranchiseListingsPage from './Components/Containers/FranchiseListings/franchiseListingPage';
// import * as actions from './Actions/index';
// import axios from 'axios';
// import {FETCH_FRANCHISE, FRANCHISE_API_DATA} from './Actions/index';


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



// Franchise Listings
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



// Franchise Cart
it('contains a franchise cart within the FranchiseListings Component', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('.cart-container'));
});

it('contains list group items inside the franchise cart', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('.list-group-item'));
});


// describe('actions', () => {
//   it('should create an action to fetch franchises', () => {
//     const request = axios.get(FRANCHISE_API_DATA);
//     const expectedAction = {
//       type: FETCH_FRANCHISE,
//       payload: request
//     };
//     console.log(actions.fetchFranchises());
//     console.log(expectedAction);
    
//     expect(actions.fetchFranchises()).equal(expectedAction);
//   });
// });