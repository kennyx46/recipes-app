import { connect } from 'react-redux';
import { getRecipes } from '../../data/recipes/actions';
import { getRecipesItems, getRecipesError, getRecipesIsLoading } from '../../data/recipes/selectors';
import RecipesList from './RecipesList';
import { push } from 'connected-react-router';

const mapStateToProps = (state) => ({
    recipes: getRecipesItems(state),
    isLoading: getRecipesIsLoading(state),
    error: getRecipesError(state),
});

const mapDispatchToProps = {
    getRecipes,
    push
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RecipesList);
