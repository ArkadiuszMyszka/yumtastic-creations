import { Recipe } from "#schemas/recipes.js";

const findOwnRecipes = async (req, res, next) => {
  const userId = res.locals.user._id;
  const userOwnReceipts = await Recipe.find({ owner: userId }).lean();
  try {
    return res.status(200).json(userOwnReceipts);
  } catch (error) {
    console.log(e);
    return res.status(500).json(e);
  }
};

export default findOwnRecipes;
