import { Recipe } from "../../service/schemas/recipes.js";

const categoryRecipes = async (req, res, next) => {
  const categoryTitle = req.params.category;
  const page = req.query.page;
  const skip = Math.max(0, page) || 0;
  const perPage = 8;
  console.log(skip);

  const findRecipes = await Recipe.find({ category: categoryTitle })
    .limit(perPage)
    .skip(skip * page);

  try {
    return res.json(findRecipes).status(200);
  } catch (error) {
    console.log(e);
    return res.status(500).json(e);
  }
};
export { categoryRecipes };
