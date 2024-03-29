import { Recipe } from "#schemas/recipes.js";

const categoryRecipes = async (req, res, next) => {
  const categoryTitle = req.params.category;
  const page = req.query.page;
  const perPage = 8;
  const skip = Math.max(perPage * page) || 0;

  try {
    const findRecipes = await Recipe.find({ category: categoryTitle })
      .limit(perPage)
      .skip(skip * page);
    if (findRecipes.length === 0) {
    return next()
    }
    return res.json(findRecipes).status(200);
  } catch (e) {
    console.log(e);
    return res.status(500).json(e);
  }
};
export { categoryRecipes };
