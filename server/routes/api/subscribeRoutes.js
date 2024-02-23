import { Router } from "express";
import { subscribe } from "#controllers/subscribeRoutes/subscribeController.js";

const newsletter = Router();

/**
 * @openapi
 * tags:
 *  name: Subscription
 *  description: Allows user to subscribe for updates via email
 */

/**
 * @openapi
 * /:
 *  patch:
 *    summary: Sharing email for subscription
 *    tags: [Subscription]
 *    requestBody:
 *      required: true
 *      content:
 *       application/json:
 *        schema:
 *         type: object
 *         required: email
 *         properties:
 *              email:
 *                  type: string
 *    responses:
 *      201:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                  message:
 *                     type: string
 *                  email:
 *                     type: string
 */

newsletter.patch("/subscribe", subscribe);



export default newsletter;
