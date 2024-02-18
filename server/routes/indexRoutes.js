import { Router } from 'express';
import { subscribe } from './indexRoutes/subscribeRoutes.js';
import { main } from './indexRoutes/mainRoutes.js';
import { authMiddleware } from '#auth/authMiddleware.js';


const index = Router();

index.get('/', main);
index.get('/subscribe', authMiddleware, subscribe);


export default index;
