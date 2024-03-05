import { User } from "#schemas/user.js";

async function logoutUser(req, res, next) {
  try {
    const userData = res.locals.user;
    const user = await User.findById(userData._id);
    if (user.isLogged === true) {
      user.token = "";
      user.isLogged = false;
      await user.save();
      res.locals.user = "";
      res.status(200).json({ message: "Logout successful" });
    } else {
    res.status(401).json({ message: "User is not authorized" });

    }
  } catch (err) {
    next(err);
  }
}

export { logoutUser };
