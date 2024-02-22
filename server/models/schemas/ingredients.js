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

/**
 * @openapi
 * components:
 *   schemas:
 *     ingredient:
 *       required:
 *         - ttl
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           example: 640c2dd963a319ea671e365b
 *         ttl:
 *           type: string
 *           example: Chicken
 *         desc:
 *           type: string
 *         thb:
 *           type: string
 *           example: https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564123/rw8pn3541bmukb8d3mio.png
 *
 */

export const Ingredients = mongoose.model(
  "ingredient",
  ingredientsSchema,
  "ingredients"
);
