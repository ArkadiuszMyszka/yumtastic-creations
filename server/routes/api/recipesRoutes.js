import { Router } from "express";

import categoryList from "#controllers/recipesRoutes/categoryListController.js";
import { categoryMainPage } from "#controllers/recipesRoutes/categoryMainPageController.js";
import { categoryRecipes } from "#controllers/recipesRoutes/categoryRecipesController.js";
import { idRecipe } from "#controllers/recipesRoutes/idRecipeController.js";
import { authMiddleware } from "../../middlewares/authMiddleware.js";
import createRecipe from "#controllers/recipesRoutes/createRecipesController.js";
import deleteRecipe from "#controllers/recipesRoutes/deleteRecipesController.js";
import findOwnRecipes from "#controllers/recipesRoutes/findOwnRecipesController.js";
import searchRecipe from "#controllers/recipesRoutes/searchRecipeController.js";

const recipes = Router();

recipes.get("/recipes/main-page", authMiddleware, categoryMainPage);
recipes.get("/recipes/:id", authMiddleware, idRecipe);
recipes.get("/recipes/:category", authMiddleware, categoryRecipes);
recipes.post("/ownRecipes", authMiddleware, createRecipe);
recipes.delete("/ownRecipes", authMiddleware, deleteRecipe);
recipes.get("/ownRecipes", authMiddleware, findOwnRecipes);
recipes.get("/search", authMiddleware, searchRecipe);

export default recipes;
