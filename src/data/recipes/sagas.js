import { all, takeEvery, put, call, select } from 'redux-saga/effects';
import { RECIPES } from '../actionTypes';
import actions from './actions';
import { getRecipesItems } from './selectors';
import api from '../../services/api';
import parseRecipe from '../../utils/parseRecipe';

export function* getRecipes() {
    try {
        const recipes = yield call(api.getRecipes);
        const parsedRecipes = recipes.map(parseRecipe);

        yield put(actions.getRecipesSuccess(parsedRecipes));
    } catch (error) {
        yield put(actions.getRecipesError(error));
    }
}

export function* getRecipe(action) {
    try {
        const allRecipes = yield select(getRecipesItems);
        let recipe = allRecipes.find((recipe) => recipe.id === action.payload.recipeId);
        if (recipe) {
            yield put(actions.getRecipeSuccess(recipe));
            return;
        }
        recipe = yield call(api.getRecipe, action.payload.recipeId);
        const parsedRecipe = parseRecipe(recipe);
        yield put(actions.getRecipeSuccess(parsedRecipe));
    } catch (error) {
        yield put(actions.getRecipeError(error));
    }
}

export default function* recipesSaga() {
    yield all([
        takeEvery(RECIPES.GET_RECIPES_REQUEST, getRecipes),
        takeEvery(RECIPES.GET_RECIPE_REQUEST, getRecipe),
    ]);
}
