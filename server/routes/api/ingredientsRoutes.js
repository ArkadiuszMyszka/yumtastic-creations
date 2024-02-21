import { Router } from "express";
import { authMiddleware } from "#auth/authMiddleware.js";

import ingredientsList from "../../controllers/ingredientsRoutes/ingredientsListController.js";
import recipesByIngredients from "#controllers/ingredientsRoutes/recipesByController.js";
const ingredients = Router();

/**
 * @openapi
 * tags:
 *  name: Ingredients
 *  description: Brings stored ingredients
 */

/**
 * @openapi
 * /ingredients/list:
 *   get:
 *      tags: [Ingredients]
 *      summary: Returns a list of available ingredients
 *      responses:
 *       200:
 *          description: Array of ingredients
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: "#/components/schemas/ingredient"
 *       401:
 *          description: User is not authorized
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: "#components/schemas/Error"
 */

ingredients.get("/list", authMiddleware, ingredientsList);

ingredients.get("/", authMiddleware, recipesByIngredients);

export default ingredients;
