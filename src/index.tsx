import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

// redux setup
import { Provider }  from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './Reducers/index';
import * as ReduxPromise from 'redux-promise';
import thunk from 'redux-thunk';


const createStoreWithMiddleware = applyMiddleware(ReduxPromise, thunk)(createStore); 
// createStore(rootReducer);

ReactDOM.render(
<Provider store={createStoreWithMiddleware(rootReducer)}>
    <App />
</Provider>, 
document.getElementById('root'));

// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();