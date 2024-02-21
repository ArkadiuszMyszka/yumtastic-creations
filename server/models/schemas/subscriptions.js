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

export const Subscriptions = mongoose.model(
  "subscription",
  subscribeSchema,
  "subscriptions"
);
