import { updateAvatar } from "#helpers/updateAvatar.js";
import { User } from "#schemas/User.js";

export const patchAvatar = async (req, res) => {
  try {
    const user = await User.findById(res.locals.user._id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const getAvatarURL = await updateAvatar(req, user);
    if (getAvatarURL) {
      return res
        .status(200)
        .json({ message: "Avatar updated", avatarURL: getAvatarURL });
    }
    return res.status(400).json({ message: "Problem with updating avatar" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
