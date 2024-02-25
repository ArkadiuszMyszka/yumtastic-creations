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
import popularRecipes from "../../controllers/recipesRoutes/popularRecipeController.js";

const recipes = Router();

/**
 * @openapi
 * tags:
 *  name: Recipes
 *  description: Recipes routes to manage recipes
 */

/**
 * @openapi
 *  /recipes/main-page/{category}:
 *  get:
 *    summary: Brings recipes for render on main page by category
 *    tags: [Recipes]
 *    parameters:
 *      - in: path
 *        name: category
 *        required: true
 *        schema:
 *          type: string
 *          example: /recipes/category/Beef *
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

recipes.get("/recipes/main-page/:category", authMiddleware, categoryMainPage);

/**
 * @openapi
 * /recipes/category-list:
 *  get:
 *    summary: Allows application to get a last of recipes categories
 *    tags: [Recipes]
 *    responses:
 *      200:
 *        description: Lisr of categories loaded successfully
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type: string
 *              example: ["Beef", "Pork"]
 */


recipes.get("/recipes/category-list",authMiddleware, categoryList);


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
 *    summary: Allows user to get all recipes, created by this user
 *    tags: [Recipes]
 *    responses:
 *      200:
 *        description: Data loaded successfully
 *        content:
 *          application/json:
 *            schema:
 *              $ref: "#/components/schemas/recipe"
 *
 */

recipes.get("/ownRecipes", authMiddleware, findOwnRecipes);

/**
 * @openapi
 * /search/{searchTitle}:
 *  get:
 *    summary: Search recipes, matching search query 
 *    tags: [Recipes]
 *    parameters:
 *      - in: path
 *        name: searchTitle
 *        required: true
 *        schema:
 *          type: string
 *          example: /search/bee 
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

recipes.get("/search/:searchTitle", authMiddleware, searchRecipe);

/**
 * @openapi
 * tags:
 *  name: Popular
 *  description: Brings list of popular recipes.
 */

/**
 * @openapi
 *  /popular-recipe:
 *      get:
 *          summary: Returns list of 5 most popular recipes
 *          tags: [Popular]
 *          responses:
 *              200:
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  code:
 *                                      type: integer
 *                                  message:
 *                                      type: string
 *                                  data:
 *                                      type: array
 *                                      items:
 *                                          $ref: "#/components/schemas/Recipe"
 */

recipes.get("/popular-recipe", authMiddleware, popularRecipes);

export default recipes;
