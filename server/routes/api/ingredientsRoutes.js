import { Router } from "express";
import { authMiddleware } from "#middlewares/authMiddleware.js";

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

/**
 * @openapi
 *  /ingredients:
 *      get:
 *          tags: [Ingredients]
 *          summary: Search recipes, containing defined ingredient
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              _id:
 *                                  type: string
 *                                  example: 640c2dd963a319ea671e365b
 *          responses:
 *              200:
 *                  description: Returns list of recipes, status, quantity of found documents   
 *                  content:   
 *                      application/json:
 *                          schema:
 *                              $ref: "#/components/schemas/ingredient"
 *              404:
 *                  description: Recipes not found
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  message:
 *                                      type: string
 */


ingredients.get("/", authMiddleware, recipesByIngredients);

export default ingredients;
