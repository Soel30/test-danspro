import express from "express";
import Routes from "@routes/index";
import ConfigData from "@config/env";
const app: express.Application = express();

Routes(app);

app.set("port", ConfigData.port);
export default app;
