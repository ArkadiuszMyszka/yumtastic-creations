import { Router } from 'express';
import { authMiddleware } from '#auth/authMiddleware.js';

import { registerUser } from './authRoutes/registerRoutes.js';
import { loginUser } from './authRoutes/loginRoutes.js';
import { logoutUser } from './authRoutes/logoutRoutes.js';
import { statusUser } from './authRoutes/statusRoutes.js';
import { patchUser } from './authRoutes/patchRoutes.js';

const auth = Router();

auth.post('/register', registerUser);
auth.post('/login', loginUser);
auth.get('/status', authMiddleware, statusUser);
auth.get('/logout', authMiddleware, logoutUser);
auth.patch('/patch', authMiddleware, patchUser);

export default auth;
