import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors"; // added CORS middleware

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectToMongoDB from "./db/connectToMongoDB.js";
import { app, server } from "./socket/socket.js";

dotenv.config();

console.log('MongoDB URI:', process.env.MONGO_DB_URI)

const PORT = process.env.PORT || 5000;
const rootDir = path.resolve(); // renamed __dirname to rootDir

app.use(express.json()); // to parse the incoming requests with JSON payloads (from req.body)
app.use(cookieParser());
app.use(cors()); // added CORS middleware

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.use(express.static(path.join(rootDir, "/frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(rootDir, "frontend", "dist", "index.html"));
});

app.use((req, res, next) => { // added 404 error handling
  res.status(404).send("Not Found");
});

server.listen(PORT, async () => {
  try {
    await connectToMongoDB(); // added try-catch block for MongoDB connection
    console.log(`Server Running on port ${PORT}`);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
});