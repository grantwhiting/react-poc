import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';

// testing
import { Provider }  from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import * as ReduxPromise from 'redux-promise';
import rootReducer from './Reducers/index';

import { expect } from 'chai';
import { shallow } from 'enzyme';
import * as Enzyme from 'enzyme';
import { configure } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore); 

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(rootReducer)}>
      <App />
    </Provider>, div);
});

it('contains div with className App', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('.App'));
});