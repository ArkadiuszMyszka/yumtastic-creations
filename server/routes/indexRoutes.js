import { Router } from 'express';
import { subscribe } from './indexRoutes/subscribeRoutes.js';
import { main } from './indexRoutes/mainRoutes.js';
import { authMiddleware } from '#auth/authMiddleware.js';
import createRecipe from './indexRoutes/createRecipesRoutes.js';
import deleteRecipe from './indexRoutes/deleteRecipesRoutes.js';
const index = Router();

index.get('/', main);
index.get('/subscribe', authMiddleware, subscribe);
index.post('/ownRecipes', authMiddleware, createRecipe);
index.delete('/ownRecipes', authMiddleware, deleteRecipe);
// index.get('/ownRecipes', authMiddleware,  );

export default index;
