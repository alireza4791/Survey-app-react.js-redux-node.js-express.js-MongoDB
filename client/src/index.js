import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'

import App from './components/App';
import reducers from './reducers';

//dev only
// import axios from 'axios';
// window.axios = axios;

const store = createStore(reducers, {}, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>, 
    document.getElementById('root')
    );


console.log(`stripe key is: ${process.env.REACT_APP_STRIPE_KEY}`);
console.log(`env variable is: ${process.env.NODE_ENV}`);