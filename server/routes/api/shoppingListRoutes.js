import { Router } from "express";
import addToList from "#controllers/shoppingListRoutes/addToShoppingListController.js";
import { authMiddleware } from "#middlewares/authMiddleware.js";
import deleteFromList from "#controllers/shoppingListRoutes/deleteFromShoppingListController.js";
import shopingListStatus from "#controllers/shoppingListRoutes/shoppingListStatusController.js";
const shoppingList = Router();


/**
 * @openapi
 * tags:
 *  name: Shopping
 *  description: Allows user to create shoplist of ingredients of recipes
 */

/**
 * @openapi
 * /shopping-list:
 *  post:
 *    summary: Saving certain ingredient to shopping list
 *    tags: [Shopping]
 *    requestBody:
 *      required: true
 *      content:
 *       application/json:
 *        schema:
 *         type: object
 *         required: [_id, measure]
 *         properties:
 *              _id:
 *                  type: string
 *                  example: 65d8aea2e036c489d64ccf39 <-- ingredient ID
 *              measure:
 *                  type: string
 *    responses:
 *      201:
 *        description: Ingredient saved successfully
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                  type: object
 *                  properties:
 *                      ingredientId:
 *                          type: string
 *                      measure:
 *                          type: array
 *      404:
 *          description: Ingredient not found
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: "#/components/schemas/Error"
 */



shoppingList.post("/", authMiddleware, addToList);

/**
 * @openapi
 * /shopping-list:
 *  delete:
 *    summary: Delete certain ingredient from shopping list
 *    tags: [Shopping]
 *    requestBody:
 *      required: true
 *      content:
 *       application/json:
 *        schema:
 *         type: object
 *         required: [_id, measure]
 *         properties:
 *              _id:
 *                  type: string
 *                  example: 65d8aea2e036c489d64ccf39 <-- ingredient ID
 *              measure:
 *                  type: string
 *                  example: "4" --> FIND IN TABLE AND DELETE BY INDEX
 *    responses:
 *      201:
 *          description: Shopping list available
 *          content:
 *              application/json:
 *                  schema:
 *                      type: array
 *                      items:
 *                          type: object
 *                          properties:
 *                              _id:
 *                                  type: string
 *                                  example: 65d8aea2e036c489d64ccf39 <-- ingredient ID
 *                              measure:
 *                                  type: string
 *                                  example: type:array [2,2,3,spoon, etc ] 
 *      404:
 *          description: The reason like "Measure not found"
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          message:
 *                              type: string
 */

shoppingList.delete("/", authMiddleware, deleteFromList);

/**
 * @openapi
 * /shopping-list:
 *  get:
 *    summary: Brings user's shopping list of selected ingredients
 *    tags: [Shopping]
 *    responses:
 *      200:
 *          description: Shopping list available
 *          content:
 *              application/json:
 *                  schema:
 *                      type: array
 *                      items:
 *                          type: object
 *                          properties:
 *                              _id:
 *                                  type: string
 *                                  example: 65d8aea2e036c489d64ccf39 <-- ingredient ID
 *                              measure:
 *                                  type: string
 *                                  example: type:array [2,2,3,spoon, etc ] 
 *      404:
 *          description: Shopping list is empty
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          message:
 *                              type: string
 */

shoppingList.get("/", authMiddleware, shopingListStatus);

export default shoppingList;
