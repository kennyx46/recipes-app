import React from 'react';
import { shallow } from 'enzyme';
import RecipeCard from './RecipeCard';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

describe('<RecipeCard>', () => {
    const defaultProps = Object.freeze({
        id: '1',
        title: 'Awesome food',
        tags: []
    });

    it('renders component', () => {
        const wrapper = shallow(
            <RecipeCard {...defaultProps }/>
        );

        expect(wrapper).toMatchSnapshot();
    });

    it('renders recipe details', () => {
        const recipeCard = shallow(<RecipeCard {...defaultProps} />);

        expect(recipeCard.find(Card.Title).text()).toContain(defaultProps.title);
    });

    it('renders <Badge> for every recipe tag', () => {
        const props = {
            ...defaultProps,
            tags: ['first Tag', 'second Tag'],
        };
        const recipeCard = shallow(<RecipeCard {...props} />);

        expect(recipeCard.find(Badge)).toHaveLength(props.tags.length);
    });

});
