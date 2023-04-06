import express from "express";
import bodyParser from "body-parser";
import Routes from "@routes/index";
import ConfigData from "@config/env";
import cors from "cors";
const app: express.Application = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
    origin: "*",
}));
Routes(app);

app.set("port", ConfigData.port);
export default app;
