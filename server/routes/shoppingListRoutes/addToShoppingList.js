import { User } from "#models/User.js";

const addToList = async (req, res, next) => {
  const keyWord = req.body;
  try {
    return res.json(keyWord).status(200);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export default addToList;
