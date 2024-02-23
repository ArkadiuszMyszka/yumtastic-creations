import { Router } from "express";
import { authMiddleware } from "#middlewares/authMiddleware.js";
import { patchAvatar } from "#controllers/avatarRoutes/patchAvatarController.js";

const avatar = Router();

avatar.patch("/avatar", authMiddleware, patchAvatar);

export default avatar;
