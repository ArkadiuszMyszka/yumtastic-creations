import { uploadMiddleware } from "#middlewares/multer.js";

export const uploadAvatar = (req) => {
  return new Promise((resolve, reject) => {
    uploadMiddleware.single("avatar")(req, {}, async (err) => {
      if (err) {
        reject(err);
      } else {
        resolve(req.file);
      }
    });
  });
};
