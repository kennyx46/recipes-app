import { all, takeEvery, put, call, select } from 'redux-saga/effects';
import { RECIPES } from '../actionTypes';
import actions from './actions';
import { getRecipesItems } from './selectors';
import api from '../../services/api';


const parseRecipe = (recipe) => {
    return {
        id: recipe.sys.id,
        title: recipe.fields.title,
        image: `https:${recipe.fields.photo.fields.file.url}`,
        chef: recipe.fields.chef && recipe.fields.chef.fields.name,
        description: recipe.fields.description,
        tags: (recipe.fields.tags || []).map(tag => tag.fields.name),
    };
}

function* getRecipes() {
    try {
        const recipes = yield call(api.getRecipes);
        const parsedRecipes = recipes.map(parseRecipe);

        yield put(actions.getRecipesSuccess(parsedRecipes));
    } catch (error) {
        yield put(actions.getRecipesError(error));
    }
}

function* getRecipe(action) {
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
