import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import LoadingSpinner from '../LoadingSpinner';

import './RecipesList.css';

export default class RecipesList extends Component {

    componentDidMount() {
        this.props.getRecipes();
    }

    renderRecipe = (recipe) => {
        return (
            <Col xs={12} md={6} lg={4} key={recipe.id}>
                <Card className="mb-4" onClick={() => this.props.push(`/recipes/${recipe.id}`)}>
                    <Card.Img variant="top" src={recipe.image} />
                    <Card.Header>{recipe.title}</Card.Header>
                </Card>
            </Col>
        );
    }

    render() {
        const { isLoading, recipes, error } = this.props;

        if (isLoading) {
            return (
                <LoadingSpinner/>
            );
        }

        return (
            <Container>
                <h1>Recipes</h1>
                { error && <Alert variant='danger'>Someting went wrong. Please try again later</Alert> }
                <Row>
                    {recipes.map((this.renderRecipe))}
                </Row>
            </Container>
        );
    }
}
