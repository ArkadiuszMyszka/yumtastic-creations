import { User } from "#schemas/user.js";
import { upload } from "#utils/multer/upload.js";
import { transformation } from "#utils/multer/transformation.js";

export const updateAvatar = async (req, user) => {
  try {
    const file = await upload(req, "avatar");
    const isImage = await transformation(
      file.path,
      file.filename,
      "avatars",
      250
    );
    if (!isImage) {
      throw new Error("File is not an image or could not be transformed");
    }
    const avatarURL = "/avatars/" + file.filename;
    console.log(avatarURL);

    await User.findByIdAndUpdate(user.id, { avatarURL });
    return avatarURL;
  } catch (err) {
    throw new Error(err.message);
  }
};
