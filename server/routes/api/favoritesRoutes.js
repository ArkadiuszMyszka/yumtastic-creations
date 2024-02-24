import { Router } from "express";
import { authMiddleware } from "#middlewares/authMiddleware.js";
import { favoritesList } from "#controllers/favoritesRoutes/favoritesListController.js";
import { patchFavorites } from "#controllers/favoritesRoutes/patchFavoritesController.js";

const favorites = Router();

/**
 * @openapi
 * tags:
 *  name: Favorites
 *  description: Allows users to manage favorite recipes, i.e. add to favorite or delete
 */
/**
 * @openapi
 *  /favorite:
 *      get:
 *          tags: [Favorites]
 *          summary: Returns collection of user's favorite recipes
 *          responses:
 *              200:
 *                  description: Favorite recipes found
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  favorites:
 *                                      type: array
 *                                      items:
 *                                          $ref: "#/components/schemas/recipe"
 *              401:
 *                 description: User is not authorized
 *                 content:
 *                    application/json:
 *                        schema:
 *                            $ref: "#components/schemas/Error"
 */

favorites.get("/favorites", authMiddleware, favoritesList);

/**
 * @openapi
 * /favorite:
 *  patch:
 *   summary: Allows user to save or delete defined recipe to favorites collection
 *   tags: [Favorites]
 *   parameters:
 *      - name: authorization
 *        in: header
 *        security:
 *          - bearerAuth: []
 *        description: User token
 *   requestBody:
 *     required: true
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *                  _id:
 *                      type: string
 *                      example: 640cd5ac2d9fecf12e8897fc <-recipe ID
 *   responses:
 *          200:
 *              description: Defined recipe added to user's favorite collection
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: string
 *                              recipe:
 *                                  type: string
 *                                  example: recipe ID
 *          201:
 *              description: Defined recipe deleted from user's favorite collection
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: string
 *                              recipe:
 *                                  type: string
 *                                  example: recipe ID
 *
 *
 */

favorites.patch("/favorites", authMiddleware, patchFavorites);

export default favorites;
