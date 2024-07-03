// controllers/transactionController.js
const express = require("express");
const { nanoid } = require("nanoid");
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
transactions.post(
  "/",
  checkForItemNameKey,
  checkForAmountKey,
  checkForDateKey,
  checkForFromKey,
  checkForCategoryKey,
  (req, res) => {
    const newTransaction = {
      id: nanoid(10),
      item_name: req.body.item_name,
      amount: req.body.amount,
      date: req.body.date,
      from: req.body.from,
      category: req.body.category,
    };
    transactionData.push(newTransaction);

    res.status(201).json(transactionData[transactionData.length - 1]);
    // res.status(201).json(newTransaction);
  }
);

// Update
// endpoint: /transactions/id
transactions.put(
  "/:id",
  checkForItemNameKey,
  checkForAmountKey,
  checkForDateKey,
  checkForFromKey,
  checkForCategoryKey,
  (req, res) => {
    const { id } = req.params;
    const transactionIndex = getDataIndex(transactionData, id);
    if (transactionIndex < 0) {
      res.status(404).json({
        error: "Transaction Not Found",
      });
    } else {
      transactionData[transactionIndex].item_name = req.body.item_name;
      transactionData[transactionIndex].amount = req.body.amount;
      transactionData[transactionIndex].date = req.body.date;
      transactionData[transactionIndex].from = req.body.from;
      transactionData[transactionIndex].category = req.body.category;
      res.status(202).json(transactionData[transactionIndex]);
    }
  }
);

// Delete
// endpoint: /transactions/id
transactions.delete("/:id", (req, res) => {
  const { id } = req.params;
  const transactionIndex = getDataIndex(transactionData, id);
  if (transactionIndex < 0) {
    res.status(404).json({
      error: "Transaction Not Found",
    });
  } else {
    const transaction = transactionData[transactionIndex];
    transactionData.splice(transactionIndex, 1);
    res.status(200).json(transaction);
  }
});

module.exports = transactions;
