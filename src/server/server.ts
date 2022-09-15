import express from "express";
import bodyParser from "body-parser";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import Routes from "@routes/index";
import ConfigData from "@config/env";
const app: express.Application = express();

const specs = swaggerJsdoc(ConfigData.jsdocOptions);
app.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup(specs, {
    explorer: true,
    customCss:
      ".swagger-container .swagger-ui { max-width: 800px; margin: 0 auto; }",
  })
);
Routes(app);

app.set("port", ConfigData.port);
export default app;
