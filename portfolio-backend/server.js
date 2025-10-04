import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import messageRoute from "./routes/messageRoute.js";
import errorHandler from "./middlewares/errorHandler.middleware.js";

dotenv.config();

const app = express();

const allowedOrigins = ["https://sanskarportfolio-psi.vercel.app"];

app.use(
  cors({
    origin: allowedOrigins,
    methods: ["GET", "POST", "OPTIONS"],
    credentials: true,
  })  
);

app.use(express.json());

app.use(async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (err) {
    res.status(500).json({ error: "Database connection failed" });
  }
}); // ✅ Connect to MongoDB Atlas

app.get("/favicon.png", (req, res) => {
  res.status(204).end(); // No Content
});


app.get("/", (req, res) => res.send("Backend is up and running"));
app.use("/api/messages", messageRoute);


app.use((req, res, next) => {
  res.status(404).json({ message: `🔍 Route '${req.originalUrl}' not found` });
});

app.use(errorHandler);

export default app;
