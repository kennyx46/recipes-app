import { createClient } from 'contentful';

const spaceId = process.env.SPACE_ID;
const environmentId = process.env.ENVIRONMENT_ID;
const accessToken = process.env.ACCESS_TOKEN;

const client = createClient({
  space: spaceId,
  environment: environmentId,
  accessToken,
})

export const getRecipes = async () => {
    const recipes = await client.getEntries({ content_type: 'recipe' });
    const { items } = recipes;
    return items;
}

export const getRecipe = async (recipeId) => {
    const recipe = await client.getEntry(recipeId);

    return recipe;
}

export default {
    getRecipes,
    getRecipe,
}
