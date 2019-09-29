import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router'

import createRootReducer from './rootReducer';
import rootSaga from './rootSaga';
import history from './history';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware, routerMiddleware(history)];

const store = createStore(
	createRootReducer(history), 
	compose(applyMiddleware(...middlewares)));

sagaMiddleware.run(rootSaga);

export default store;
