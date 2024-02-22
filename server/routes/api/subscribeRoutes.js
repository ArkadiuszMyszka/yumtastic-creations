import { Router } from "express";
import { subscribe } from "#controllers/subscribeRoutes/subscribeController.js";

const newsletter = Router();

newsletter.post("/subscribe", subscribe);

export default newsletter;
