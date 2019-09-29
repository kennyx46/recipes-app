import { connect } from 'react-redux';
import { compose } from 'redux';
import { getRecipe, } from '../../data/recipes/actions';
import RecipeDetails from './RecipeDetails';
import { getRecipesIsLoading, getRecipesError, getRecipeItem } from '../../data/recipes/selectors';
import { withRouter } from "react-router";

const mapStateToProps = (state) => ({
    recipe: getRecipeItem(state),
    isLoading: getRecipesIsLoading(state),
    error: getRecipesError(state),
});

const mapDispatchToProps = {
    getRecipe,
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
)(RecipeDetails);
