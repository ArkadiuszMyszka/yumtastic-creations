import { Recipe } from "#schemas/recipes.js";

async function idRecipe(req, res, next) {
  const recipeID = req.params.id;
  const recipeIdLength = recipeID.length
  if (recipeIdLength === 24) {
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
  return next()
 
}

export { idRecipe };
