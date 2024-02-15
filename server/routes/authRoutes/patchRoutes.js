import { User } from '#models/User.js';

// w pozniejszym etapie dodać wiecej mozliwosci zmiany danych
async function patchUser(req, res, next) {
  try {
    const userData = res.locals.user;
    const user = await User.findById(userData._id);
    const { email, password } = req.body;
    if (email) {
      user.email = email;
    }
    if (password) {
      await user.setPassword(password);
    }
    await user.save();
    res.status(200).json({ message: 'User updated', user });
  } catch (err) {
    next(err);
  }
}

export { patchUser };
