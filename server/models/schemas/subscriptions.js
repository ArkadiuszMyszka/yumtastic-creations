import mongoose, { Schema } from "mongoose";

const subscribeSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
    },
  },
  { versionKey: false, timestamps: true }
);

/**
 * @openapi
 * components:
 *   schemas:     
 *     subscribe:
 *       type: object
 *       required:
 *         - email
 *       properties:
 *         email:
 *           type: string
 *
 */

export const Subscriptions = mongoose.model(
  "subscription",
  subscribeSchema,
  "subscriptions"
);
