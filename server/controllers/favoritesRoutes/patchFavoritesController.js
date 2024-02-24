import { User } from "#schemas/user.js";
import { Recipe } from "#schemas/recipes.js";

export const patchFavorites = async (req, res) => {
  const userId = res.locals.user._id;
 
  try {
    const user = await User.findOne(userId);
    const recipeId = req.body.id;
    const recipe = await Recipe.findOne(recipeId);
    if (user.favorites.includes(recipeId)) {
      await user.favorites.pull(recipeId);
      await recipe.favorites.pull(userId);
      await user.save();      
      await recipe.save();      
      return res
        .status(200)
        .json({ recipe: recipeId, message: "Recipe deleted from favorites" });
    }
    await user.favorites.push(recipeId);
    await recipe.favorites.push(userId);
    await user.save();
    await recipe.save();   
    return res
      .status(201)
      .json({ recipe: recipeId, message: "Recipe added to favorites" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
