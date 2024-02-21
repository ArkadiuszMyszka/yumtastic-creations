import { Recipe } from "#schemas/recipes.js";
import findIngID from "#helpers/ingredientsHelper.js";

// SZUKANIE PO NAZWIE SKŁADNIKA
// const recipesByIngredients = async (req, res, next) => {
//   const ingredientTitle = req.body.title;
//   try {
//     const ingId = await findIngID(ingredientTitle);
//     const findRecipesByIng = await Recipe.find({
//       "ingredients.id": ingId,
//     });
//     return res.json(findRecipesByIng).status(200);
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json(error);
//   }
// };
const recipesByIngredients = async (req, res, next) => {
  const ingId = req.body.ingredientiD;
  try {
    const findRecipesByIng = await Recipe.find({
      "ingredients.id": ingId,
    });
    return res.json(findRecipesByIng).status(200);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export default recipesByIngredients;
