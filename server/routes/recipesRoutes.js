import { Router } from 'express';

import { categoryList } from './recipesRoutes/categoryListRoutes.js';
import { categoryMainPage } from './recipesRoutes/categoryMainPageRoutes.js';
import { categoryRecipes } from './recipesRoutes/categoryRecipesRoutes.js';
import { idRecipe } from './recipesRoutes/idRecipeRoutes.js';


const recipes = Router();

recipes.get('/category-list', categoryList);
recipes.get('/main-page', categoryMainPage);
recipes.get('/:category', categoryRecipes);
recipes.get('/:id', idRecipe);

export default recipes;
