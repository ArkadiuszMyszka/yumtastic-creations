import { uploadMiddleware } from "#middlewares/uploadMiddleware.js";

export const upload = (req, type) => {
  return new Promise((resolve, reject) => {
    uploadMiddleware.single(type)(req, {}, async (err) => {
      if (err) {
        reject(err);
      } else {
        resolve(req.file);
      }
    });
  });
};
