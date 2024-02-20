import { Router } from "express";
import { main } from "./indexRoutes/mainRoutes.js";

const index = Router();

index.get("/", main);

export default index;
