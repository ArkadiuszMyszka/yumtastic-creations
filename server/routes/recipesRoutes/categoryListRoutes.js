import { CategoryList } from "../../service/schemas/recipiesCategoryList.js";

const categoryList = async (req, res, next) => {
  
  try {
    const userOwnReceipts = await CategoryList.find({}, null, {
      sort: { title: 1 },
    });
    return res.json(userOwnReceipts).status(200);
  } catch (error) {
    console.log(e);
    return res.status(500).json(e);
  }
};

export default categoryList;
