import { Recipe } from '../../service/schemas/recipes.js';

//req powinien przyjac tylko _id receptury

const deleteRecipe = async (req, res, next) => {
  const recipeId = req.body._id;
  const check = await Recipe.findOne({ _id: recipeId });
  if (!check) {
    return res.status(404).json({ message: 'Recipe already deleted or not found' });
  } else {
    try {
      await Recipe.findOneAndDelete({ _id: recipeId });
      return res.status(200).json({ message: 'Recipe deleted!' });
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  }
};

export default deleteRecipe;
