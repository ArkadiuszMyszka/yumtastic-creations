import { Recipe } from "#schemas/recipes.js";

export const favoritesList = async (req, res) => {
  try {
    const user = res.locals.user;
    if (user.favorites.length === 0) {
      return res
        .status(200)
        .json({ favorites: [], message: "Your favorites list is empty" });
    }
    const favoritesList = await Recipe.find({
      _id: { $in: user.favorites },
    });

    res.status(200).json({ favorites: favoritesList });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
