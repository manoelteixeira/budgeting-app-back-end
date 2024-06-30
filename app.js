// app.js
const express = require("express");
const cors = require("cors");

// Import Controllers
const transactionController = require("./controllers/transactionController");

// Create an instance of the express server
const app = express();

// Middleware
app.use(cors()); // Accept Front end Connections
app.use(express.json()); // Enable app to accecpt JSON from POST and PUT requests
app.use("/transactions", transactionController);

// Home Route
app.get("/", (req, res) => {
  res.status(200).send("Welcome to the Bidgeting App!");
});

// Error Route
app.get("*", (req, res) => {
  res.status(404).json({ error: "404 Page Not Found" });
});

module.exports = app;
