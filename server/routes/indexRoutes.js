import { Router } from "express";
import { subscribe } from "./indexRoutes/subscribeRoutes.js";
import { main } from "./indexRoutes/mainRoutes.js";

const index = Router();

index.get("/", main);
index.post("/subscribe", subscribe);

export default index;
