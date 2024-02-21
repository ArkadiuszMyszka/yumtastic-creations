import { Ingredients } from "#schemas/ingredients.js";

const ingredientsList = async (req, res, next) => {
  try {
    const list = await Ingredients.findOne(
      { ttl: ingredientTitle },
      { _id: 1 }
    ).lean();
    return res.json(list).status(200);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export default ingredientsList;
