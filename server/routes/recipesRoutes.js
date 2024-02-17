import { Router } from 'express';

import  categoryList  from './recipesRoutes/categoryListRoutes.js';
import { categoryMainPage } from './recipesRoutes/categoryMainPageRoutes.js';
import { categoryRecipes } from './recipesRoutes/categoryRecipesRoutes.js';
import { idRecipe } from './recipesRoutes/idRecipeRoutes.js';
import { authMiddleware } from "#auth/authMiddleware.js";

const recipes = Router();

recipes.get('/category-list', authMiddleware, categoryList);
recipes.get('/main-page', categoryMainPage);
recipes.get('/:id', idRecipe);
recipes.get('/:category', categoryRecipes);

export default recipes;
