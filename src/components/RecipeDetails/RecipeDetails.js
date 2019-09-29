import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';
import RecipeCard from './RecipeCard';

export default class RecipeDetails extends Component {

    componentDidMount() {
        const { recipeId } = this.props.match.params;

        this.props.getRecipe({ recipeId });
    }

    render() {
        let { isLoading, recipe, error } = this.props;

        if (isLoading || !recipe) {
            return (
                <Container>
                    <p>Loading</p>
                </Container>
            );
        }

        return (
            <Container>
                <h1>Recipe Details</h1>
                <div className="my-2">
                    <Link to='/'>Recipes</Link>
                </div>
                { error ?
                    <Alert variant='danger'>Someting went wrong. Please try again later</Alert> :
                    <RecipeCard {...recipe}/>
                }
            </Container>
        );
    }
}
