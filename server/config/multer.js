import multer from "multer";
import path from "path";
import { promises as fs } from "fs";
import { v4 as uuidV4 } from "uuid";

const isAccessible = (path) =>
  fs
    .access(path)
    .then(() => true)
    .catch(() => false);

const setupFolder = async (path) => {
  const folderAvailable = await isAccessible(path);
  if (!folderAvailable) {
    try {
      await fs.mkdir(path);
    } catch (e) {
      console.log("no permission");
      process.exit(1);
    }
  }
};

const tempDir = path.join(process.cwd(), "server/tmp");
const publicDir = path.join(process.cwd(), "server/public");
const storeAvatarDir = path.join(process.cwd(), "server/public/avatars");
const storeRecipeImgDir = path.join(
  process.cwd(),
  "server/public/recipeImages"
);

setupFolder(tempDir);
setupFolder(publicDir);
setupFolder(storeAvatarDir);
setupFolder(storeRecipeImgDir);

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, tempDir);
  },
  filename: (req, file, cb) => {
    cb(null, `${uuidV4()}${file.originalname}`);
  },
});

const extensionWhiteList = [".jpg", ".png", ".jpeg", ".gif"];
const mimetypeWhiteList = ["image/jpeg", "image/png", "image/gif", "image/jpg"];

export { multerStorage, extensionWhiteList, mimetypeWhiteList };
