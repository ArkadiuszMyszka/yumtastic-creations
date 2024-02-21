import { Router } from "express";
import { main } from "#controllers/indexRoutes/mainController.js";

const index = Router();

index.get("/", main);

export default index;
