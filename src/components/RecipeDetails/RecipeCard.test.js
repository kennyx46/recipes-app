import React from 'react';
import { shallow } from 'enzyme';
import RecipeCard from './RecipeCard';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

describe('RecipeCard', () => {
    const defaultProps = Object.freeze({
        tags: []
    });

    it('renders component', () => {
        const wrapper = shallow(
            <RecipeCard {...defaultProps }/>
        ).dive();

        expect(wrapper).toMatchSnapshot();
    });

    it('renders recipe details', () => {
        const sampleRecipe = { id: '1', title: 'Awesome food', tags: [] };
        const props = { ...defaultProps, ...sampleRecipe };
        const recipeCard = shallow(<RecipeCard {...props} />);

        expect(recipeCard.find(Card.Title).text()).toContain('Awesome food');
    });

    it('renders recipe tags', () => {
        const sampleRecipe = { id: '1', title: 'Awesome food', tags: ['first Tag', 'second Tag'] };
        const props = { ...defaultProps, ...sampleRecipe };
        const recipeCard = shallow(<RecipeCard {...props} />);

        expect(recipeCard.find(Badge)).toHaveLength(2);
    });

});
