import { Recipe } from "#schemas/recipes.js";

const searchRecipe = async (req, res, next) => {
  const keyWord = req.params.searchTitle;
  try {
    const findRecipe = await Recipe.find({
      title: { $regex: keyWord, $options: "i" },
    });
    if (!findRecipe || findRecipe.length === 0) {
      return res.json({ message: "Such recipe not found" }).status(404);
    }
    return res.json(findRecipe).status(200);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export default searchRecipe;
