import { Router } from "express";
import { authMiddleware } from "#auth/authMiddleware.js";
import { favoritesList } from "#controllers/favoritesRoutes/favoritesListController.js";
import { patchFavorites } from "#controllers/favoritesRoutes/patchFavoritesController.js";

const favorites = Router();

favorites.get("/favorites", authMiddleware, favoritesList);
favorites.patch("/favorites", authMiddleware, patchFavorites);

export default favorites;