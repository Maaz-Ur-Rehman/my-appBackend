const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const cors = require("cors");


const authRoutes = require("./routes/authRoutes");
const messegeRoutes = require("./routes/messegeRoutes");

const { getConnectionFromPool } = require("./config/connection");

const app = express(); // Initialize app first

app.use(bodyParser.json());
app.use(cors({ credentials: true, origin: "*" }));

app.use((req, res, next) => {
  res.header("Cache-Control", "no-cache, no-store, must-revalidate");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Pragma", "no-cache");
  res.header("Expires", "0");
  next();
});


app.get("/", (req, res) => {
  res.send("Hello World!");
});

getConnectionFromPool();

// Use routes after middlewares
app.use("/", authRoutes);
app.use("/",messegeRoutes)


app.listen(3200, () => {
  console.log("Server is running on port 3200");
});
