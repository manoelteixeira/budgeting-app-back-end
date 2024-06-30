// controllers/transactionController.js
const express = require("express");
const transactionData = require("../models/transaction-data.json"); // App Data
const { getDataIndex } = require("../helpers/dataHelpers");

const transactions = express.Router(); // endpoint router

// Middleware - Validators
const {
  checkForItemNameKey,
  checkForAmountKey,
  checkForDateKey,
  checkForFromKey,
  checkForCategoryKey,
} = require("../validators/transactionValidators");

// Index Route
// endpoint: /transactions
transactions.get("/", (req, res) => {
  res.status(200).json(transactionData);
});

// Show Route
// endpoint: /transactions/id
transactions.get("/:id", (req, res) => {
  const { id } = req.params;
  const transaction = transactionData.find((item) => item.id == id);
  console.log(transaction);
  if (transaction == undefined) {
    res.status(404).json({
      error: "Transaction Not Found",
    });
  } else {
    res.status(200).json(transaction);
  }
});

// Create
// endpoint: /transactions

// Update
// endpoint: /transactions/id

// Delete
// endpoint: /transactions/id

module.exports = transactions;
