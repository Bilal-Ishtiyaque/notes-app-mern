import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import serverless from "serverless-http";

import notesRoutes from "./src/routes/notesRoutes.js";
import { connectDb } from "./src/config/db.js";
import rateLimiter from "./src/middleware/rateLimiter.js";

dotenv.config();

const app = express();

app.use(cors({
  origin: "*",
}));

app.use(express.json());
app.use(rateLimiter);
app.use("/api/notes", notesRoutes);

let serverlessHandler;

async function initialize() {
  await connectDb();
  serverlessHandler = serverless(app);
}

initialize();

export const handler = async (event, context) => {
  if (!serverlessHandler) {
    await initialize();
  }
  return serverlessHandler(event, context);
};
