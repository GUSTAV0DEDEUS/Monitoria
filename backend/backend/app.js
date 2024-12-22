import express from "express";
import connectDatabase from "./database/db.js";
import bodyParser from "body-parser";
import routes from "./routes/property.route.js";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();

connectDatabase();

app.use(cors());
app.use(bodyParser.json());
app.use(routes);

export default app;
