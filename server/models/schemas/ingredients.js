import mongoose, { Schema } from "mongoose";

const ingredientsSchema = new Schema({
  ttl: {
    type: String,
    required: [true, "Title is required"],
  },
  desc: {
    type: String,
    required: [true, "Description is required"],
  },

  t: {
    type: String,
    default: "",
  },
  thb: {
    type: String,
    default: "",
  },
});

export const Ingredients = mongoose.model(
  "ingredient",
  ingredientsSchema,
  "ingredients"
);
