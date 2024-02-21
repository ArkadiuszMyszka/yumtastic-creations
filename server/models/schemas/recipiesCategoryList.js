import mongoose, { Schema } from "mongoose";

const categoryListSchema = new Schema({
  title: {
    type: String,
    required: [true, "Category name is required"],
  },
  thumb: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
    required: [true, "Description is required"],
  },
});

/**
 * @openapi
 * components:
 *   schemas:     
 *     recipeCategoryList:
 *       type: object
 *       required:
 *         - title
 *         - description
 *       properties:
 *         title:
 *           type: string
 *         thumb:
 *           type: string
 *         description:
 *           type: string
 *
 */

export const CategoryList = mongoose.model(
  "categories",
  categoryListSchema,
  "categoriesList"
);
