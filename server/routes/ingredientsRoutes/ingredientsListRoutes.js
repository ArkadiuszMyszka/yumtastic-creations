import { Ingredients } from "../../service/schemas/ingredients.js";

const ingredientsList = async (req, res, next) => {
  try {
    const list = await Ingredients.find();
    return res.json(list).status(200);
  } catch (error) {
    console.log(e);
    return res.status(500).json(e);
  }
};

export default ingredientsList;
