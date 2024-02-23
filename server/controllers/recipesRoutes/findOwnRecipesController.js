import { Recipe } from "#schemas/recipes.js";

//funkcja zwraca id receptur ownera
const findOwnRecipes = async (req, res, next) => {
  const userId = res.locals.user._id;
  try {
    const userOwnReceipts = await Recipe.find(
      { owner: userId },
      { _id: 1 }
    ).lean();

    return res.status(200).json(userOwnReceipts);
  } catch (error) {
    console.log(e);
    return res.status(500).json(e);
  }
};

// jak funkcja ma zwracac wszystkie dane to  podmienic

// const findOwnRecipes = async (req, res, next) => {
//   const userId = res.locals.user._id;
//   const userOwnReceipts = await Recipe.find({ owner: userId }).lean();
//   try {
//     return res.status(200).json(userOwnReceipts);
//   } catch (error) {
//     console.log(e);
//     return res.status(500).json(e);
//   }
// };

export default findOwnRecipes;
