import { Recipe } from "#schemas/recipes.js";

const categoryMainPage = async (req, res, next) => {
  const categoryTitle = req.body.title;
  try {
    const findRecipes = await Recipe.find({ category: categoryTitle }).lean();

    return res.json(findRecipes).status(200);
  } catch (e) {
    console.log(e);
    return res.status(500).json(e);
  }
};

export { categoryMainPage };
