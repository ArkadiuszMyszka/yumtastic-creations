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

/**
 * @openapi
 * components:
 *   schemas:
 *     recipe:
 *       type: object
 *       required:
 *         - title
 *         - category
 *         - instructions
 *         - time
 *       properties:
 *         id:
 *           type: string
 *           example: 6462a8f74c3d0ddd28897fb8
 *         title:
 *           type: string
 *           example: Mediterranean Pasta Salad
 *         category:
 *           type: string
 *           example: Seafood
 *         area:
 *           type: string
 *           example: Italian
 *         instructions:
 *           type: array
 *         description:
 *             type: string
 *         thumb:
 *            type: string
 *            example: https://www.themealdb.com/images/media/meals/wvqpwt1468339226.jpg
 *         preview:
 *            type: string
 *            example: https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678560402/mwtf7uqrnsxvlpjqtslc.jpg
 *         time:
 *             type: string
 *             example: 12
 *         youtube:
 *             type: string
 *             example: https://www.youtube.com/watch?v=e52IL8zYmaE
 *         tags:
 *             type: array
 *             items:
 *               type: string
 *             example: ["Pasta", "Baking"]
 *         ingredients:
 *             type: array
 *             id:
 *               type: string
 *               example: 6462a8f74c3d0ddd28897fb8
 *             measure:
 *               type: string
 *
 */

export const Recipe = mongoose.model("recipe", recipeSchema, "recipes");
