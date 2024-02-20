import { Router } from "express";
// import { User } from "#models/User.js";
import { authMiddleware } from "#auth/authMiddleware.js";
import { favoritesList } from "./favoritesRoutes/favoritesListRoutes.js";

const favorites = Router();

favorites.get("/favorites", authMiddleware, favoritesList);

export default favorites;
