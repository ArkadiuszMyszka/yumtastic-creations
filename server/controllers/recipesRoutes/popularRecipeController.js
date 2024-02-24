import { Recipe } from "#schemas/recipes.js";

const popularRecipes = async (req, res, next) => {
  try {
    const allRecipes = await Recipe.find();
    const result = allRecipes
      .filter((recipe) => recipe.favorites && recipe.favorites.length > -1)
      .sort((a, b) => b.favorites.length - a.favorites.length)
      .slice(0, 5);

    res.status(200).json(result);
  } catch (e) {
    console.log(e);
    return res.status(500).json(e);
  }
};

export default popularRecipes;
