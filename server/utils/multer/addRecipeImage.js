import { upload } from "#utils/multer/upload.js";
import { transformation } from "#utils/multer/transformation.js";

export const addRecipeImage = async (req) => {
  try {
    const file = await upload(req, "thumb");
    const isImage = await transformation(
      file.path,
      file.filename,
      "recipeImages",
      350
    );
    if (!isImage) {
      throw new Error("File is not an image or could not be transformed");
    }
    const thumbURL = "/recipeImages/" + file.filename;
    return thumbURL;
  } catch (err) {
    throw new Error(err.message);
  }
};
