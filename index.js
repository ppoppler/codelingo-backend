import express from "express";
import mongoose from "mongoose";

const app = express();


/**
 * Creating basis for app listening
 * Uses ES6 with esm for imports
 */

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
  err => {
    console.log(`Server faile to connect`);
  };
});

app.get("/", (req, res) => {
  res.send("Hello world! This is condelingo!");
});
