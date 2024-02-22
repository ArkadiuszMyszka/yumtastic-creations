import { uploadAvatar } from "#helpers/uploadAvatar.js";

export const patchAvatar = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const getAvatarURL = await uploadAvatar(req);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
