import { CategoryList } from "#schemas/recipiesCategoryList.js";

const categoryList = async (req, res, next) => {
  
  try {
    const categories = await CategoryList.distinct("title");
    if (!categories.length) {
      res.status(404).json({ 
        message: "No such category",
      });
      return;
    }
    return res.status(200).json(categories);
  } catch (e) {
    console.log(e);
    return res.status(500).json(e);
  }
};

export default categoryList;
