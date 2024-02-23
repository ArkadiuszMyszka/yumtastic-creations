import { User } from "#schemas/user.js";

const shopingListStatus = async (req, res, next) => {
  const { _id } = res.locals.user;

  try {
    const user = await User.findById(_id);
    const shoppingList = user.shoppingList;
    if (shoppingList.length === 0) {
      return res.json({ message: "Shopping list is empty" }).status(404);
    }
    return res.json(shoppingList).status(200);
  } catch (e) {
    console.log(e);
    return res.status(500).json(e);
  }
};

export default shopingListStatus;
