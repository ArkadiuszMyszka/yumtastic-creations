import { Router } from 'express';

import { registerUser } from './authRoutes/registerRoutes.js';
import { signinUser } from './authRoutes/signinRoutes.js';
import { logoutUser } from './authRoutes/logoutRoutes.js';

const auth = Router();

auth.get('/register', registerUser);
auth.get('/signin', signinUser);
auth.get('/logout', logoutUser);

export default auth;
