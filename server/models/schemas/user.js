import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set user name"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    avatarURL: {
      type: String,
      default: "",
    },
    avatarURL: {
      type: String,
      default: "",
    },
    token: {
      type: String,
      default: "",
    },
    isLogged: {
      type: Boolean,
      default: false,
    },
    isValidated: {
      type: Boolean,
      default: false,
    },
    newsletter: {
      type: Boolean,
      default: false,
    },
    favorites: {
      type: [String],
    },
    shoppingList: [
      {
        ingredientId: {
          type: String,
          default: "",
        },

        measure: [],
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

export const User =
  mongoose.models.user || mongoose.model("user", userSchema, "users");

/**
 * @openapi
 * components:
 *  schemas:
 *   userRegister:
 *     type: object
 *     required:
 *             - name
 *             - email
 *             - password
 *     properties:
 *         name:
 *           type: string
 *           description: Name of new user
 *         email:
 *           type: string
 *           description: Email of new user, must be unique through database
 *         password:
 *           type: string
 *           format: password
 *           description: User password
 *   userLogin:
 *     type: object
 *     required:
 *             - email
 *             - password
 *     properties:
 *         email:
 *           type: string
 *           description: Email of new user, must be unique through database
 *         password:
 *           type: string
 *           description: User password
 *
 *   userLoginResponse:
 *     type: object
 *     properties:
 *         token:
 *           type: string
 *           description: User token
 *
 *
 *   userRegisterResponse:
 *     type: object
 *     properties:
 *         id:
 *           type: string
 *           description: The auto-genereted by database unique id
 *         name:
 *           type: string
 *           description: Name of new user
 *         email:
 *           type: string
 *           description: Email of new user, must be unique through database
 *         password:
 *           type: string
 *           description: User password
 *         token:
 *           type: string
 *           description: User token generated after login
 *         isLogged:
 *           type: boolean
 *           description: default false, inform if token is valid
 *         avatarURL:
 *           type: string
 *           default: ""
 *           description: Url to user avatar
 *         isValidated:
 *           type: boolean
 *           default: false
 *           description: Defines wether the user confirmed email
 *         favorites:
 *          type: array
 *          items: {}
 *          description: Array of favorite recipes
 *         shoppingList:
 *          type: array
 *          items: {}
 *          description: Shopping list array
 *
 *   userUpdate:
 *      type: object
 *      properties:
 *          name:
 *              type: string
 *          password:
 *              type: string
 *          email:
 *              type: string
 *          avatarURL:
 *           type: string
 *   Error:
 *      type: object
 *      properties:
 *         message:
 *           type: string
 */
