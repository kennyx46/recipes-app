import reducer, { initialState } from './reducer';
import * as actions from './actions';
import { RECIPES } from '../actionTypes';

describe('recipes reducer', () => {
    let state = reducer(undefined, {});

    beforeEach(() => {
        state = { ...initialState };
    });

    it('should return the initial state', () => {
        expect(initialState).toEqual(state);
    });

    it('should change into loading state', () => {
        state.isLoading = true;
        expect(reducer(undefined, { type: RECIPES.GET_RECIPES_REQUEST })).toEqual(state);
    });


    describe('Get Recipes List', () => {

        it('should add recipe items', () => {
            const payload = {
                recipes: [{}, {}],
            };
            state.list = payload.recipes;
            expect(reducer(undefined, { type: RECIPES.GET_RECIPES_SUCCESS, payload })).toEqual(state);
        });

        it('should set the error state', () => {
            const error = { message: 'broken' };
            state.error = error;
            state.isLoading = false;
            expect(reducer(undefined, { type: RECIPES.GET_RECIPES_ERROR, payload: { error } })).toEqual(state);
        });

    });

    describe('Get Recipe Item', () => {

        it('should add recipe items', () => {
            const payload = {
                recipe: {},
            };
            state.current = payload.recipe;
            expect(reducer(undefined, { type: RECIPES.GET_RECIPE_SUCCESS, payload })).toEqual(state);
        });

        it('should set the error state', () => {
            const error = { message: 'broken' };
            state.error = error;
            state.isLoading = false;
            expect(reducer(undefined, { type: RECIPES.GET_RECIPES_ERROR, payload: { error } })).toEqual(state);
        });

    });

});
