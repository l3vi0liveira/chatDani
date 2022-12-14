import express from "express";
import routes from "./routes/index";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

export default app;
