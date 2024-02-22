import fs from "fs";
import Jimp from "jimp";

export const transformation = (path, filename, pathname, size) =>
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
          .resize(size, size)
          .writeAsync(`server/public/${pathname}/${filename}`);

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
