const parseRecipe = (recipe) => {
    return {
        id: recipe.sys.id,
        title: recipe.fields.title,
        image: `https:${recipe.fields.photo.fields.file.url}`,
        chef: recipe.fields.chef && recipe.fields.chef.fields.name,
        description: recipe.fields.description,
        tags: (recipe.fields.tags || []).map(tag => tag.fields.name),
    };
}

export default parseRecipe;
