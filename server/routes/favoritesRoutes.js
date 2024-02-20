import { Router } from "express";
// import { User } from "#models/User.js";
import { authMiddleware } from "#auth/authMiddleware.js";
import { favoritesList } from "./favoritesRoutes/favoritesListRoutes.js";
import { patchFavorites } from "./favoritesRoutes/addToFavoritesRoutes.js";

const favorites = Router();

favorites.get("/favorites", authMiddleware, favoritesList);
favorites.patch("/favorites", authMiddleware, patchFavorites);

export default favorites;
