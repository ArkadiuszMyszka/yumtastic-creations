import { Router } from "express";
import { authMiddleware } from "#middlewares/authMiddleware.js";
import { categoriesPage } from "#controllers/categoryPageController.js"; // Import kontrolera dla strony kategorii

const router = Router();

/**
 * @openapi
 * tags:
 *  name: Categories
 *  description: Allows users to view categories of recipes
 */
/**
 * @openapi
 *  /categories:
 *      get:
 *          tags: [Categories]
 *          summary: Returns collection of recipe categories
 *          responses:
 *              200:
 *                  description: Categories found
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  categories:
 *                                      type: array
 *                                      items:
 *                                          type: string
 *              401:
 *                 description: User is not authorized
 *                 content:
 *                    application/json:
 *                        schema:
 *                            $ref: "#components/schemas/Error"
 */

router.get("/categories", authMiddleware, categoryPageController); // Zaktualizowana trasa prowadząca do strony kategorii

export default router;
