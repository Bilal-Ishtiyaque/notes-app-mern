import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import notesRoutes from "./routes/notesRoutes.js";
import { connectDb } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.set('trust proxy', true);

app.use(cors({
    origin: "https://notes-app-frontend-teal.vercel.app",
}));

app.use(express.json());
app.use(rateLimiter);

app.use("/api/notes", notesRoutes);

app.get("/", (req, res) => {
  res.send({ activeStatus: true, error: false });
});

connectDb().then(() => {
    app.listen(port, () => {
        console.log(`Hi Bilal! Server has started on port ${port}`);
    });
});