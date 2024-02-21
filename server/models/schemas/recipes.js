import mongoose, { Schema } from "mongoose";

const ingredientsSchema = new Schema({
  
  id: mongoose.Types.ObjectId,
  measure: {
    type: String,
    required: [true, "Measure is required"],
  },
},{ _id : false }); 

const recipeSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    category: {
      type: String,
      required: [true, "Category is required"],
    },
    area: {
      type: String,
      default: "",
    },
    instructions: {
      type: String,
      required: [true, "Instructions is required"],
    },
    description: {
      type: String,
      default: "",
    },
    thumb: {
      type: String,
      default: "",
    },
    preview: {
      type: String,
      default: "",
    },
    time: {
      type: Number,
      required: [true, "Time in minutes is required"],
    },
    favorites: {
      type: Array,
      default: [],
    },
    youtube: {
      type: String,
      default: "",
    },
    tags: {
      type: Array,
      default: [],
    },
    ingredients: [ingredientsSchema],
    owner: {
      type: String,
      default: undefined,
    },
  },
  { versionKey: false, timestamps: true }
);



export const Recipe = mongoose.model("recipe", recipeSchema, "recipes");
