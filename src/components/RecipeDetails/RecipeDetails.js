import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';
import LoadingSpinner from '../LoadingSpinner';
import RecipeCard from './RecipeCard';

export default class RecipeDetails extends Component {

    componentDidMount() {
        const { recipeId } = this.props.match.params;

        this.props.getRecipe({ recipeId });
    }

    render() {
        const { isLoading, recipe, error } = this.props;

        if (isLoading) {
            return (
                <LoadingSpinner/>
            );
        }

        return (
            <Container>
                <h1>Recipe Details</h1>
                <div className="my-2">
                    <Link to='/'>Recipes</Link>
                </div>
                { error || !recipe ?
                    <Alert variant='danger'>Someting went wrong. Please try again later</Alert> :
                    <RecipeCard {...recipe}/>
                }
            </Container>
        );
    }
}
