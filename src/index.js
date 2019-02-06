import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";
// CSS Stylings
import './index.css';
import App from './App';

// Provider/Loggers
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers/";
import thunk from 'redux-thunk';
import logger from 'redux-logger'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, logger))
);



ReactDOM.render(
<Provider store={store}>
    <Router>
    <App />
    </Router>
</Provider>,
 document.getElementById('root'));