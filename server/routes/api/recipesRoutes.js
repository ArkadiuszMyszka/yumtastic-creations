import { Router } from "express";

import categoryList from "#controllers/recipesRoutes/categoryListController.js";
import { categoryMainPage } from "#controllers/recipesRoutes/categoryMainPageController.js";
import { categoryRecipes } from "#controllers/recipesRoutes/categoryRecipesController.js";
import { idRecipe } from "#controllers/recipesRoutes/idRecipeController.js";
import { authMiddleware } from "#auth/authMiddleware.js";
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
 * /recipes:
 *  get:
 *    summary: Allows user and applicaion to get all recipes from db
 *    tags: [Recipes]
 *    responses:
 *      200:
 *        description: Data loaded successfully
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                  $ref: "#/components/schemas/Recipe"
 */

recipes.get("/recipes/category-list", authMiddleware, categoryList);

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

recipes.get("/recipes/main-page", authMiddleware, categoryMainPage);
recipes.get("/recipes/:id", authMiddleware, idRecipe);
recipes.get("/recipes/:category", authMiddleware, categoryRecipes);
recipes.post("/ownRecipes", authMiddleware, createRecipe);
recipes.delete("/ownRecipes", authMiddleware, deleteRecipe);
recipes.get("/ownRecipes", authMiddleware, findOwnRecipes);
recipes.get("/search", authMiddleware, searchRecipe);

export default recipes;