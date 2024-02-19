import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    newsletter: {
      type: Boolean,
      default: false,
    },
    shoppingList: [
      {
        ingredientId: {
          type: String,
          default: "",
        },

        measure: {
          type: String,
          required: [true, "Set the measure"],
        },
      },
    ],
  },
  { versionKey: false, timestamps: true }
);

userSchema.methods.setPassword = async function (password) {
  this.password = await bcrypt.hash(password, 10);
};

userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

export const User = mongoose.model('user', userSchema, 'users');
