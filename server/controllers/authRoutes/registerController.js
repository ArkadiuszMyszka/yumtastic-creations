import { User } from "#schemas/user.js";
import { isInDb } from '#helpers/usersHelpers.js';

async function registerUser(req, res, next) {
  const { name, email, password } = req.body;
  const userInDb = await isInDb(email);
  if (userInDb) {
    return res.status(409).json({ message: 'Email in use' });
  }
  try {
    const user = new User({ email, name });
    await user.setPassword(password);
    await user.save();
    res.status(201).json({ message: 'Account created', user });
  } catch (err) {
    next(err);
  }
}

export { registerUser };
