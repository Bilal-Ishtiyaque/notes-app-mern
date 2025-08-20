import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import notesRoutes from "./routes/notesRoutes.js";
import { connectDb } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors({
    origin: "http://localhost:5173",
}));

app.use(express.json());
app.use(rateLimiter);

app.use("/api/notes", notesRoutes);

connectDb().then(() => {
    app.listen(port, () => {
        console.log(`Hi Bilal! Server has started on port ${port}`);
    });
});