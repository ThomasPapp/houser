import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';

import reducer from './reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = applyMiddleware(promiseMiddleware(composeEnhancers))
const enhancer = composeEnhancers(middleware);

export default createStore(reducer, enhancer);