import { User } from "#schemas/user.js";

// w pozniejszym etapie dodać wiecej mozliwosci zmiany danych
async function patchUser(req, res, next) {
  try {
    const userData = res.locals.user;
    const user = await User.findById(userData._id);
    const { avatarURL, name, email, password } = req.body;
    if (email) {
      user.email = email;
    }
    if (name) {
      user.name = name;
    }
    if (password) {
      await user.setPassword(password);
    }
    if (avatarURL) {
      user.avatarURL = avatarURL;;
    }
    await user.save();
    res.status(201).json({ message: 'User updated', user });
  } catch (err) {
    next(err);
  }
}

export { patchUser };
