import { Recipe } from "#schemas/recipes.js";

const recipesByIngredients = async (req, res, next) => {
  const ingId = req.params.id;
  try {
    const findRecipesByIng = await Recipe.find({
      "ingredients.id": ingId,
    });
    if (!findRecipesByIng) {
      return res.json({ message: "Recipes not found" }).status(404);
    }
    return res.json(findRecipesByIng).status(200);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export default recipesByIngredients;
