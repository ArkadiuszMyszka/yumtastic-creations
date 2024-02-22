import { User } from "#schemas/User.js";
import { uploadAvatar } from "#helpers/uploadAvatar.js";

export const updateAvatar = async (req, user) => {
  try {
    const file = await uploadAvatar(req);
    const isImage = await isImageAndTransform(file.path, file.filename);
    if (!isImage) {
      throw new Error("File is not an image or could not be transformed");
    }
    const avatarURL = "/avatars/" + file.filename;
    await User.findByIdAndUpdate(user.id, { avatarURL });
    return avatarURL;
  } catch (err) {
    throw new Error(err.message);
  }
};
