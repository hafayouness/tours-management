import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

import routerUser from "./routes/users.js";
import routerTour from "./routes/tours.js";
import routerAuth from "./routes/auth.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;
const corsOptions = {
  origin: true,
  credentials: true,
};

// middlewre
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use("/api/v1/tours", routerTour);
app.use("/api/v1/users", routerUser);
app.use("/api/v1/auth", routerAuth);
//connect database

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log(" MongoDB dataBase connected");
  } catch (err) {
    console.log("mongodb database connection failed", err);
  }
};

// connect
app.listen(port, () => {
  connect();
  console.log("server listenning on port", port);
});
