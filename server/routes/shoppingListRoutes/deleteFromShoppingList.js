import { User } from "#models/User.js";

const deleteFromList = async (req, res, next) => {
  const { _id } = res.locals.user;
  const ingredientId = req.body.ingredientId;
  const measure = req.body.measure;
  try {
    const indexIngredient = user.shoppingList.findIndex((obj) => {
      return obj.ingredientId == ingredientId;
    });

    const indexMeasure =
      user.shoppingList[indexIngredient].measure.indexOf(measure);

    const user = await User.findById(_id);

    if (!user.shoppingList || user.shoppingList.length === 0) {
      await User.findOneAndUpdate(
        { _id: _id },
        {
          $pull: { shoppingList: { ingredientId: ingredientId } },
        },
        { new: true }
      );
      return res.status(404).json({
        message: "Shopping list is empty",
      });
    }

    if (indexMeasure !== -1) {
      const currentShoppingList = user.shoppingList[indexIngredient].measure;

      currentShoppingList.splice(indexMeasure, 1);
      user.save();
      return res.status(200).json(user.shoppingList);
    } else {
      return res.status(404).json({ message: "Measure not found" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export default deleteFromList;
