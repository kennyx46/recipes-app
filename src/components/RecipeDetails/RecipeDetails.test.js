import React from 'react';
import { shallow } from 'enzyme';
import RecipeCard from './RecipeCard';

import RecipeDetails from './RecipeDetails';

describe('RecipeDetails', () => {
    const defaultProps = Object.freeze({
        recipe: {
            tags: []
        },
        isLoading: false,
        error: null,
        match: { params: {} },
        getRecipe: jest.fn(),
    });

    it('renders component', async () => {
        const wrapper = shallow(
            <RecipeDetails {...defaultProps }/>
        ).dive();

        expect(wrapper).toMatchSnapshot();
    });

    it('shows loading if loading in progress', async () => {
        const props = { ...defaultProps, isLoading: true };
        const recipeDetails = shallow(<RecipeDetails {...props} />);

        expect(recipeDetails.text()).toContain('Loading');
    });

    it('renders RecipeCard if recipe is present', async () => {
        const props = { ...defaultProps };
        const recipeDetails = shallow(<RecipeDetails {...props} />);

        expect(recipeDetails.find(RecipeCard)).toHaveLength(1);
    });

});
