import { Recipe } from "#schemas/recipes.js";

async function idRecipe(req, res, next) {
  const recipeID = req.params.id;
  try {
    const findRecipe = await Recipe.findById(recipeID);
    if (!findRecipe) {
      return res.status(404).json({ message: "Recipes not found" });
    }
    return res.json(findRecipe).status(200);
  } catch (e) {
    console.log(e);
    return res.status(500).json(e);
  }
}

export { idRecipe };
