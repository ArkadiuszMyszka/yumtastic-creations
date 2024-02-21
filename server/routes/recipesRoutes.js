import { Router } from 'express';

import  categoryList  from './recipesRoutes/categoryListRoutes.js';
import { categoryMainPage } from './recipesRoutes/categoryMainPageRoutes.js';
import { categoryRecipes } from './recipesRoutes/categoryRecipesRoutes.js';
import { idRecipe } from './recipesRoutes/idRecipeRoutes.js';
import { authMiddleware } from "#auth/authMiddleware.js";
import createRecipe from "./recipesRoutes/createRecipesRoutes.js";
import deleteRecipe from "./recipesRoutes/deleteRecipesRoutes.js";
import findOwnRecipes from "./recipesRoutes/findOwnRecipesRoutes.js";
import searchRecipe from './recipesRoutes/searchRecipeRoutes.js';

const recipes = Router();

recipes.get("/recipes/category-list", categoryList);
recipes.post("/recipes/main-page", categoryMainPage);
recipes.get('/recipes/:id', authMiddleware, idRecipe);
recipes.get("/recipes/:category", authMiddleware, categoryRecipes);
recipes.post("/ownRecipes", authMiddleware, createRecipe);
recipes.delete("/ownRecipes", authMiddleware, deleteRecipe);
recipes.get("/ownRecipes", authMiddleware, findOwnRecipes);
recipes.get("/search", authMiddleware, searchRecipe);

export default recipes;
