import { Router } from "express";

import categoryList from "#controllers/recipesRoutes/categoryListController.js";
import { categoryMainPage } from "#controllers/recipesRoutes/categoryMainPageController.js";
import { categoryRecipes } from "#controllers/recipesRoutes/categoryRecipesController.js";
import { idRecipe } from "#controllers/recipesRoutes/idRecipeController.js";
import { authMiddleware } from "#middlewares/authMiddleware.js";
import createRecipe from "#controllers/recipesRoutes/createRecipesController.js";
import deleteRecipe from "#controllers/recipesRoutes/deleteRecipesController.js";
import findOwnRecipes from "#controllers/recipesRoutes/findOwnRecipesController.js";
import searchRecipe from "#controllers/recipesRoutes/searchRecipeController.js";

const recipes = Router();

/**
 * @openapi
 * tags:
 *  name: Recipes
 *  description: Recipes routes to manage recipes
 */

/**
 * @openapi
 *  /recipes/main-page:
 *      get:
 *          tags: [Recipes]
 *          summary: Brings recipes for render on main page by category
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              title:
 *                                  type: string
 *                                  example: Chicken
 *          responses:
 *              200:
 *                  description: Returns list of recipes, status, quantity of found documents
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: "#/components/schemas/recipe"
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

recipes.get("/recipes/main-page", authMiddleware, categoryMainPage);

/**
 * @openapi
 * /recipes/{category}:
 *  get:
 *    summary: Brings recipes for render on main page, returns by 8 recipes 
 *    tags: [Recipes]
 *    parameters:
 *      - in: path
 *        name: category?page=number
 *        required: true
 *        schema:
 *          type: string
 *          example: /recipes/Beef?page=2

 *    responses:
 *      200:
 *        description: List of recipes by defined category
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: "#/components/schemas/recipe"
 */

recipes.get("/recipes/:category", authMiddleware, categoryRecipes);

/**
 * @openapi
 * /recipes/{id}:
 *  get:
 *    summary: Brings recipe for render
 *    tags: [Recipes]
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: List of recipes by defined category
 *        content:
 *          application/json:
 *            schema:
 *                $ref: "#/components/schemas/recipe"
 *      404:
 *                  description: Recipes not found
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  message:
 *                                      type: string
 */

recipes.get("/recipes/:id", authMiddleware, idRecipe);

/**
 * @openapi
 * /ownRecipes:
 *  post:
 *    summary: Allows user to save own recipe
 *    tags: [Recipes]
 *    requestBody:
 *      required: true
 *      content:
 *       multipart/form-data:
 *        schema:
 *         type: object
 *         $ref: "#/components/schemas/recipe"
 *
 *    responses:
 *      201:
 *        description: Recipe created successfully
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                  $ref: "#/components/schemas/recipe"
 */

recipes.post("/ownRecipes", authMiddleware, createRecipe);

/**
 * @openapi
 * /ownRecipes/delete:
 *  delete:
 *      summary: Allows user to delete own recipe from DB and own profile
 *      tags: [Recipes]
 *      requestBody:
 *            required: true
 *            content:
 *               application/json:
 *                   schema:
 *                       type: object
 *                       properties:
 *                            _id:
 *                               type: string
 *                               example: 640cd5ac2d9fecf12e8898dc <-- recipeID
 *      responses:
 *          204:
 *              description: Onw recipe deleted
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: string
 *
 */

recipes.delete("/ownRecipes", authMiddleware, deleteRecipe);

/**
 * @openapi
 * /ownRecipes:
 *  get:
 *          tags: [Recipes]
 *          summary: Allows user to get all recipes, created by this user
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              _id:
 *                                  type: string
 *                                  example: 65d64d4a0d91ce76deb4936c
 *          responses:
 *              200:
 *                  description: Returns list of recipes, status, quantity of found documents
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: "#/components/schemas/recipe"
 */

recipes.get("/ownRecipes", authMiddleware, findOwnRecipes);

/**
 * @openapi
 * /search:
 *  get:
 *    summary: Search recipes, matching search query
 *    tags: [Recipes]
 *    requestBody:
 *      required: true
 *      content:
 *          application/json:
 *              schema:
 *                  type: object
 *                  properties:
 *                      searchTitle:
 *                          type: string
 *    responses:
 *      200:
 *          description: Recipes found
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: "#/components/schemas/Recipe"
 *      404:
 *          description: Such recipe not found
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          code:
 *                              type: integer
 *                          message:
 *                              type: string
 */

recipes.get("/search", authMiddleware, searchRecipe);

export default recipes;
