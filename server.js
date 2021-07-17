import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import RouterUser from "./controller/user/UserController.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

const POST = process.POST || 5500;
const URL =
  "mongodb+srv://admin:admin@cluster0.10wkx.mongodb.net/chatapp?retryWrites=true&w=majority";
mongoose
  .connect(URL, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => {
    console.log("Connect mongoose successfully");
    app.listen(POST, (req, res) => {
      console.log(`Connect database successfully on ${POST}`);
    });
  });

app.use("/user", RouterUser);
