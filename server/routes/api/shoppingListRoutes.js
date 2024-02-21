import { Router } from "express";
import addToList from "#controllers/shoppingListRoutes/addToShoppingListController.js";
import { authMiddleware } from "../../middlewares/authMiddleware.js";
import deleteFromList from "#controllers/shoppingListRoutes/deleteFromShoppingListController.js";
import shopingListStatus from "#controllers/shoppingListRoutes/shoppingListStatusController.js";
const shoppingList = Router();

shoppingList.post("/", authMiddleware, addToList);
shoppingList.delete("/", authMiddleware, deleteFromList);
shoppingList.get("/", authMiddleware, shopingListStatus);

export default shoppingList;
