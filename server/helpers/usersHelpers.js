import { User } from '#models/User.js';

export const isInDb = async email => {
  try {
    const user = await User.findOne({ email });
    return user;
  } catch (err) {
    return err;
  }
};
