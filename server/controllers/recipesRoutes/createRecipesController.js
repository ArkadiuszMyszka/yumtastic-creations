import { Recipe } from "#schemas/recipes.js";
import { upload } from "#utils/multer/upload.js";
import { addRecipeImage } from "../../utils/multer/addRecipeImage.js";

async function createRecipe(req, res, next) {
  const {
    title,
    category,
    tags,
    area,
    youtube,
    time,
    instructions,
    favorites,
    description,
    thumb,
    preview,
    ingredients,
  } = req.body;
  const user = res.locals.user._id;
  try {
    const getThumbURL = await addRecipeImage(req, user);
    const newRecipe = new Recipe({
      title,
      category,
      tags,
      area,
      youtube,
      time,
      instructions,
      favorites,
      description,
      thumb: getThumbURL,
      preview,
      ingredients,
      owner: user,
    });
    await newRecipe.save();

    return res.status(201).json({ message: "Recipe created!", newRecipe });
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: e.message });
  }
}

export default createRecipe;
