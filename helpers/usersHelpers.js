import { User } from '#models/User.js';

export const isInDb = async email => {
  const user = await User.findOne({ email });

  return user;
};
