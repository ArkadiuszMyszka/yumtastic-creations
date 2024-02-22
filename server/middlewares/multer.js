import multer from "multer";
import fs from "fs";
import path from "path";
import Jimp from "jimp";
import {
  multerStorage,
  extensionWhiteList,
  mimetypeWhiteList,
} from "#config/multer.js";

export const uploadMiddleware = multer({
  storage: multerStorage,
  fileFilter: async (req, file, cb) => {
    const extension = path.extname(file.originalname).toLowerCase();
    const mimetype = file.mimetype;
    if (
      !extensionWhiteList.includes(extension) ||
      !mimetypeWhiteList.includes(mimetype)
    ) {
      return cb(null, false);
    }
    return cb(null, true);
  },
  limits: { fileSize: 1024 * 1024 * 5 }, // 5MB
});

export const isImageAndTransform = (path, filename) =>
  new Promise((resolve, reject) => {
    Jimp.read(path, async (err, image) => {
      if (err) {
        resolve(false);
      }
      try {
        const width = image.bitmap.width;
        const height = image.bitmap.height;

        const minDimension = Math.min(width, height);
        const x = width > minDimension ? (width - minDimension) / 2 : 0;
        const y = height > minDimension ? (height - minDimension) / 2 : 0;

        await image
          .crop(x, y, minDimension, minDimension)
          .resize(250, 250)
          .writeAsync(`public/avatars/${filename}`);

        fs.unlink(path, (err) => {
          if (err) {
            console.error("Failed to delete file in tmp folder: ", err);
          }
        });
        resolve(true);
      } catch (e) {
        console.log(e);
        resolve(false);
      }
    });
  });
