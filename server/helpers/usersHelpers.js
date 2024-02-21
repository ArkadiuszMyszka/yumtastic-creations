import { User } from "#schemas/user.js";

export const isInDb = async email => {
  try {
    const user = await User.findOne({ email });
    return user;
  } catch (err) {
    return err;
  }
};
