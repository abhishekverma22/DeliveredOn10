import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import helmet from "helmet";
import connectDB from "./configs/connectDB.js";

dotenv.config();
const app = express();

app.use(
  cors({
    credentials: true,
    origin: process.env.FRONTEND_URL,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));
app.use(
  helmet({
    crossOriginResourcePolicy: false,
  })
);

const PORT = process.env.PORT || 3000;

app.get("/test", (req, res) => {
  res.status(200).json({ msg: "This is Test Route" });
});

app.get((req, res) => {
  res.status(404).json({ msg: "This is invalid Route..." });
});

connectDB().then(() => {
  app.listen(PORT, () =>
    console.log("Server is running on Port number ", PORT)
  );
});
