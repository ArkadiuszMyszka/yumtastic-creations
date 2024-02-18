import { Router } from "express";
import { authMiddleware } from "#auth/authMiddleware.js";

import ingredientsList from "./ingredientsRoutes/ingredientsListRoutes.js";
import recipesByIngredients from "./ingredientsRoutes/recipesByIngredients.js";
const ingredients = Router();

ingredients.get("/list", authMiddleware, ingredientsList);
ingredients.get("/", authMiddleware, recipesByIngredients);

export default ingredients;
