import { User } from "#models/User.js";

const addToList = async (req, res, next) => {
  const { _id } = res.locals.user;
  const ingredientID = req.body.ingredientId;
  const measure = req.body.measure;
  const newIngredient = {
    measure: measure,
    ingredientId: ingredientID,
  };

  try {
    const user = await User.findById(_id);
    if (!user.shoppingList || user.shoppingList.length === 0) {
      user.shoppingList = [newIngredient];
      user.save();
      return res.status(200).json(user.shoppingList);
    } else if (user.shoppingList.length) {
      const index = user.shoppingList.findIndex((obj) => {
        return obj.ingredientId == ingredientID;
      });
      if (index !== -1) {
        user.shoppingList[index].measure =
          user.shoppingList[index].measure.concat(measure);
      }
    } else {
      user.shoppingList = [...user.shoppingList, newIngredient];
    }
    user.save();

    return res.status(200).json(user.shoppingList);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export default addToList;
