import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';

// testing
import { Provider }  from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import * as ReduxPromise from 'redux-promise';
import rootReducer from './Reducers/index';


const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore); 

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(rootReducer)}>
      <App />
    </Provider>, div);
});
