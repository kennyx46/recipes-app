import React from 'react';
import { shallow } from 'enzyme';
import Card from 'react-bootstrap/Card';
import LoadingSpinner from '../LoadingSpinner';

import RecipesList from './RecipesList';

describe('<RecipesList>', () => {
    const defaultProps = Object.freeze({
        push: jest.fn(),
        recipes: [],
        isLoading: false,
        getRecipes: jest.fn(),
    });

    it('renders component', () => {
        const wrapper = shallow(
            <RecipesList {...defaultProps }/>
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('shows loading if loading in progress', () => {
        const props = { ...defaultProps, isLoading: true };
        const recipesList = shallow(<RecipesList {...props} />);
        expect(recipesList.exists(LoadingSpinner)).toBeTruthy();
    });

    it('renders <Card> for every recipe', () => {
        const sampleRecipe = { id: '1', title: 'recipe One' };
        const props = { ...defaultProps, recipes: [ sampleRecipe, { ...sampleRecipe, id: '2' }, { ...sampleRecipe, id: '3' } ] };
        const recipesList = shallow(<RecipesList {...props} />);
        expect(recipesList.find(Card)).toHaveLength(3);
    });


    it('navigate to recipe details on click', () => {
        const sampleRecipe = { id: '1', title: 'recipe One' };
        const props = { ...defaultProps, recipes: [ sampleRecipe ] };
        const recipesList = shallow(<RecipesList {...props} />);

        recipesList.find(Card).simulate('click');

        expect(defaultProps.push).toHaveBeenCalledWith(`/recipes/${sampleRecipe.id}`);
    });

});
