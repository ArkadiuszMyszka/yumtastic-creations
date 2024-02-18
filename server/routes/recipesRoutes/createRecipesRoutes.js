import { Recipe } from '../../service/schemas/recipes.js';

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
      thumb,
      preview,
      ingredients,
      owner: user,
    });
    await newRecipe.save();

    return res.status(201).json({ message: "Recipe created!", newRecipe });
  } catch (e) {
    console.log(e);
    return res.status(500).json(e);
  }
}

export default createRecipe;
