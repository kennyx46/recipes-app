import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'

import recipes from './recipes/reducer';

const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    recipes
})

export default createRootReducer;
