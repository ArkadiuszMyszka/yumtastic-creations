import { Router } from "express";
import { authMiddleware } from "#middlewares/authMiddleware.js";

import ingredientsList from "../../controllers/ingredientsRoutes/ingredientsListController.js";
import recipesByIngredients from "#controllers/ingredientsRoutes/recipesByController.js";
const ingredients = Router();

ingredients.get("/list", authMiddleware, ingredientsList);
ingredients.get("/", authMiddleware, recipesByIngredients);

export default ingredients;
