import { Router } from "express";
import addToList from "./shoppingListRoutes/addToShoppingList.js";
import { authMiddleware } from "#auth/authMiddleware.js";
import deleteFromList from "./shoppingListRoutes/deleteFromShoppingList.js";
import shopingListStatus from "./shoppingListRoutes/shoppingListStatus.js";
const shoppingList = Router();

shoppingList.post("/", authMiddleware, addToList);
shoppingList.delete("/", authMiddleware, deleteFromList);
shoppingList.get("/", authMiddleware, shopingListStatus);

export default shoppingList;
