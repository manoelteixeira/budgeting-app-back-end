const express = require("express");

// Create an instance of the express server
const app = express();

// Home Route
app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

module.exports = app;
