import { Router } from "express";
import addToList from "./shoppingListRoutes/addToShoppingList.js";
import { authMiddleware } from "#auth/authMiddleware.js";
import deleteFromList from "./shoppingListRoutes/deleteFromShoppingList.js";

const shoppingList = Router();

shoppingList.post("/", authMiddleware, addToList);
shoppingList.delete("/", authMiddleware, deleteFromList);

export default shoppingList;
