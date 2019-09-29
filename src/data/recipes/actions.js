import { RECIPES } from '../actionTypes';

export const getRecipes = () => ({
    type: RECIPES.GET_RECIPES_REQUEST,
});

export const getRecipesSuccess = (recipes) => ({
    type: RECIPES.GET_RECIPES_SUCCESS,
    payload: { recipes },
});

export const getRecipesError = (error) => ({
    type: RECIPES.GET_RECIPES_ERROR,
    payload: { error }
});

export const getRecipe = ({ recipeId }) => ({
    type: RECIPES.GET_RECIPE_REQUEST,
    payload: { recipeId }
});

export const getRecipeSuccess = (recipe) => ({
    type: RECIPES.GET_RECIPE_SUCCESS,
    payload: { recipe },
});

export const getRecipeError = (error) => ({
    type: RECIPES.GET_RECIPE_ERROR,
    payload: { error }
});

export default {
    getRecipes,
    getRecipesSuccess,
    getRecipesError,
    getRecipe,
    getRecipeSuccess,
    getRecipeError,
}
