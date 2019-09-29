import { all } from 'redux-saga/effects';

import recipesSaga from './recipes/sagas';


export default function* rootSaga() {
    yield all([recipesSaga()]);
}
