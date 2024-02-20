import express from "express";
import logger from "morgan";
import cors from "cors";
import "dotenv/config";
import { setJWTStrategy } from "#config/jwt.js";

import swaggerUI from "swagger-ui-express";
import swaggerjsdoc from "swagger-jsdoc";

import index from "./server/routes/indexRoutes.js";
import auth from "./server/routes/authRoutes.js";
import recipes from "./server/routes/recipesRoutes.js";
import ingredients from "./server/routes/ingredientsRoutes.js";
import newsletter from "./server/routes/subscribeRoutes.js";
import favorites from "./server/routes/favoritesRoutes.js";
import shoppingList from "./server/routes/shoppingListRoutes.js";

const app = express();
const formatsLogger = app.get("env") === "development" ? "dev" : "short";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Test Name",
      version: "1.0.0",
      description:
        "This app offers more than just a collection of recipes - it is designed to be your very own digital cookbook. You can easily save and retrieve your own recipes at any time.",
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
    servers: [
      {
        url: "http://localhost:3002/api",
      },
      // {
      //   url: "tutaj bedzie adres drugiego servera",
      // },
    ],
  },
  apis: ["./server/routes/*.js", "./models/*.js"],
};

const swaggerSpec = swaggerjsdoc(options);
const swaggerDocs = (app, port) => {};
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));
app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

setJWTStrategy();

app.use("/", index);
app.use("/", newsletter);
app.use("/", favorites);
app.use("/", auth);
app.use("/", recipes);
app.use("/ingredients", ingredients);
app.use("/shopping-list", shoppingList);
app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

export { app };
