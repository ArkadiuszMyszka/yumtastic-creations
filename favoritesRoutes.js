import { Router } from "express";
import { authMiddleware } from "#auth/authMiddleware.js";
import { favoritesList } from "./server/routes/favoritesRoutes/favoritesListRoutes.js";
import { patchFavorites } from "./server/routes/favoritesRoutes/patchFavoritesRoutes.js";

const favorites = Router();

favorites.get("/favorites", authMiddleware, favoritesList);
favorites.patch("/favorites", authMiddleware, patchFavorites);

export default favorites;
