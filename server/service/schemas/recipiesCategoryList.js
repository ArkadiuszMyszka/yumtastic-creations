import mongoose, { Schema } from "mongoose";

const categoryListSchema = new Schema({
  title: {
    type: String,
    required: [true, "Category name is required"],
    unique: true,
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

export const CategoryList = mongoose.model(
  "categoriesList",
  categoryListSchema,
  "categoriesList"
);
