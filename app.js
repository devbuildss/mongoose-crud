const express = require("express");
const mongoose = require("mongoose");
const url = "mongodb://localhost/e-comm";

const app = express();

mongoose.connect(url);
const con = mongoose.connection;

con.on("open", () => {
  console.log("connected...");
});

app.use(express.json());

const userRouter = require("./routes/users");
app.use("/users", userRouter);

app.listen(3000, () => {
  console.log("Server started");
});
