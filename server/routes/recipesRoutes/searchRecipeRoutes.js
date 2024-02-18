import { Recipe } from "../../service/schemas/recipes.js";

const searchRecipe = async (req, res, next) => {
  const keyWord = req.body.searchTitle;
  try {
    const findRecipe = await Recipe.find({
      title: { $regex: keyWord, $options: "i" },
    });
    return res.json(findRecipe).status(200);
  } catch (error) {
    console.log(e);
    return res.status(500).json(e);
  }
};

export default searchRecipe;
