import { getRecipes, getRecipe } from './sagas';
import api from '../../services/api';
import actions from './actions';
import recordSaga from '../../testUtils/recordSaga';

const mockParsedRecipe = { id: 1, title: 'test' };

jest.mock('../../utils/parseRecipe', () => {
    return () => mockParsedRecipe;
});

describe('recipes sagas', () => {

    beforeEach(() => {
        api.getRecipes = jest.fn(async () => []);
        api.getRecipe = jest.fn(async () => ({}));
    });

    afterEach(() => {
        jest.resetAllMocks();
    });

    describe('getRecipes Saga', () => {
        it('should get recipes from API and call success action', async () => {
            const initialAction = {};

            const dispatched = await recordSaga(
                getRecipes,
                initialAction
            );

            expect(dispatched).toContainEqual(actions.getRecipesSuccess([]));
            expect(api.getRecipes).toHaveBeenCalled();
        });

        it('should call error action if get recipes API failed', async () => {
            const error = new Error('api call failed');
            api.getRecipes = jest.fn(() => { throw error });
            const initialAction = {};

            const dispatched = await recordSaga(
                getRecipes,
                initialAction
            );

            expect(dispatched).toContainEqual(actions.getRecipesError(error));
            expect(api.getRecipes).toHaveBeenCalled();
        });
    });


    describe('getRecipe Saga', () => {
        it('should get recipe from state if it is there', async () => {
            const initialAction = { payload: { recipeId: 1 }};
            const recipeFromState = { id: 1 };
            const state = { recipes: { list: [recipeFromState] } };

            const dispatched = await recordSaga(
                getRecipe,
                initialAction,
                state
            );

            expect(dispatched).toContainEqual(actions.getRecipeSuccess(recipeFromState));
            expect(api.getRecipe).not.toHaveBeenCalled();
        });

        it('should get recipe from API and call success action', async () => {
            const initialAction = { payload: { recipeId: 1 }};
            const state = { recipes: { list: [] } };

            const dispatched = await recordSaga(
                getRecipe,
                initialAction,
                state
            );

            expect(dispatched).toContainEqual(actions.getRecipeSuccess(mockParsedRecipe));
            expect(api.getRecipe).toHaveBeenCalled();
        });

        it('should call error action if get recipes API failed', async () => {
            const error = new Error('api call failed');
            api.getRecipe = jest.fn(() => { throw error });
            const initialAction = { payload: { recipeId: 1 }};
            const state = { recipes: { list: [] } };

            const dispatched = await recordSaga(
                getRecipe,
                initialAction,
                state
            );

            expect(dispatched).toContainEqual(actions.getRecipeError(error));
            expect(api.getRecipe).toHaveBeenCalled();
        });
    });

});
