import { Router } from "express";
import { authMiddleware } from "#auth/authMiddleware.js";

import { registerUser } from "../../controllers/authRoutes/registerController.js";
import { loginUser } from "../../controllers/authRoutes/loginController.js";
import { logoutUser } from "../../controllers/authRoutes/logoutController.js";
import { statusUser } from "../../controllers/authRoutes/statusController.js";
import { patchUser } from "../../controllers/authRoutes/patchController.js";

const auth = Router();

auth.post("/register", registerUser);
auth.post("/login", loginUser);
auth.get("/status", authMiddleware, statusUser);
auth.get("/logout", authMiddleware, logoutUser);
auth.patch("/patch", authMiddleware, patchUser);

export default auth;
