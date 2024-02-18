import { Router } from "express";
import { authMiddleware } from "#auth/authMiddleware.js";

import ingredientsList from "./ingredientsRoutes/ingredientsListRoutes.js";

const ingredients = Router();

ingredients.get("/list", authMiddleware, ingredientsList);


export default ingredients;
