import express from "express";
import dotenv from 'dotenv';
import connectDb from "./utils/connectDb.js";
dotenv.config();


const PORT = process.env.PORT || 5000;
const app = express();
app.get("/", (req, res) => {
  res.send("Server is running...");
});

app.listen(PORT, () => {
  console.log(`Server running on  ${PORT}`);
  connectDb();
});