import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

let isConnected;

export const connectDB = async () => {
  if (isConnected) {
    console.log("🔁 Using existing MongoDB connection");
    return;
  }

  try {
    const url = process.env.MONGO_URI;
    if (!url) throw new Error("Missing MONGO_URI");

    const db = await mongoose.connect(url);
    isConnected = db.connections[0].readyState;
    console.log("✅ MongoDB Atlas connected!");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
    throw error;
  }
};

export default connectDB;