import { Router } from "express";
import addToList from "./shoppingListRoutes/addToShoppingList.js";
import { authMiddleware } from "#auth/authMiddleware.js";

const shoppingList = Router();

shoppingList.post("/", authMiddleware, addToList);

export default shoppingList;
