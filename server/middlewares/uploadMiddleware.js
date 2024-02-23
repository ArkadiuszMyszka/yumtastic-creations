import multer from "multer";
import path from "path";
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
