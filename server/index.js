import express, { json } from "express";
import dotenv from 'dotenv';
import connectDb from "./utils/connectDb.js";
import cookieParser from "cookie-parser";
import cors from 'cors';
import authRouter from "./routes/auth.route.js";
dotenv.config();
const app = express();

const PORT = process.env.PORT || 5000;
app.use(cors(
  {
    origin : "http://localhost:5173",
    credentials : true,
    methods : ["GET","POST","PUT","DELETE","OPTIONS" ]
  }
))
app.use(express.json());
app.use(cookieParser())

app.get("/", (req, res) => {
  res.send("Server is also running...");
});

app.use("/api/auth", authRouter);
app.listen(PORT, () => {
  console.log(`Server running on  ${PORT}`);
  connectDb();
});
