import { User } from "#models/User.js";

export const patchFavorites = async (req, res) => {
  try {
    const user = await User.findOne(res.locals.user._id);
    const recipeId = req.body.id;

    if (user.favorites.includes(recipeId)) {
      await user.favorites.pull(recipeId);
      await user.save();
      return res
        .status(200)
        .json({ recipe: recipeId, message: "Recipe deleted from favorites" });
    }
    await user.favorites.push(recipeId);
    await user.save();
    res
      .status(201)
      .json({ recipe: recipeId, message: "Recipe added to favorites" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
