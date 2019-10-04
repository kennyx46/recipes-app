import { RECIPES } from '../actionTypes';

export const initialState = {
    list: [],
    current: null,
    isLoading: false,
    error: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case RECIPES.GET_RECIPES_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null,
            }
        case RECIPES.GET_RECIPES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                list: action.payload.recipes,
                current: null,
            }
        case RECIPES.GET_RECIPES_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload.error,
            }
        case RECIPES.GET_RECIPE_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null,
            }
        case RECIPES.GET_RECIPE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                current: action.payload.recipe,
            }
        case RECIPES.GET_RECIPE_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload.error,
            }
        default:
            return state;
    }
};
