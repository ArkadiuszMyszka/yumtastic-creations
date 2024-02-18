
import { Ingredients } from "../service/schemas/ingredients.js";

const findIngID = async (title) => {
  try {
    const ingID = await Ingredients.findOne(
      { ttl: title },
      { _id: 1 }
    ).lean();
    return ingID._id;
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export default findIngID