import { Router } from "express";
import { subscribe } from "#controllers/indexRoutes/subscribeController.js";

const newsletter = Router();

newsletter.post("/subscribe", subscribe);

export default newsletter;
