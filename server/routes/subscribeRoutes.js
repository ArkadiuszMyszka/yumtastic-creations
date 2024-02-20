import { Router } from "express";
import { subscribe } from "./indexRoutes/subscribeRoutes.js";

const newsletter = Router();

newsletter.post("/subscribe", subscribe);

export default newsletter;
