import { Recipe } from "../../service/schemas/recipes.js";

async function idRecipe(req, res, next) {
  const recipeID = req.params.id;
  try {
    const findRecipe = await Recipe.findById(recipeID);
    return res.json(findRecipe).status(200);
  } catch (e) {
    console.log(e);
    return res.status(500).json(e);
  }
}

export { idRecipe };
