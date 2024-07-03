// validators/transactionValidators.js

function checkForItemNameKey(req, res, next) {
  if (!req.body.hasOwnProperty("item_name")) {
    console.log(req.body);
    res.status(400).json({ error: "Transaction must have a item_name key" });
  } else if (typeof req.body.item_name != "string") {
    res.status(400).json({ error: "Item Name must be a string" });
  } else if (req.body.item_name.length == 0) {
    res.status(400).json({ error: "Item Name must not be an empty string" });
  } else {
    next();
  }
}

function checkForAmountKey(req, res, next) {
  if (!req.body.hasOwnProperty("amount")) {
    req.status(400).json({ error: "Transaction must have a amount key" });
  } else if (typeof req.body.amount != "number") {
    res.status(400).json({ error: "Amount must be a number" });
  } else if (req.body.amount <= 0) {
    res.status(400).json({ error: "Amount must be a number bigger than 0" });
  } else {
    next();
  }
}

function checkForDateKey(req, res, next) {
  const date = new Date(req.body.date);

  if (!req.body.hasOwnProperty("date")) {
    req.status(400).json({ error: "Transaction must have a date key" });
  } else if (typeof req.body.date != "string") {
    res.status(400).json({ error: "Date must be a string" });
  } else if (date == "Invalid Date") {
    res.status(400).json({ error: "Invalid Date" });
  } else if (req.body.date.length == 0) {
    res.status(400).json({ error: "Date must not be an empty string" });
  } else {
    next();
  }
}

function checkForFromKey(req, res, next) {
  if (!req.body.hasOwnProperty("from")) {
    req.status(400).json({ error: "Transaction must have a from key" });
  } else if (typeof req.body.from != "string") {
    res.status(400).json({ error: "From must be a string" });
  } else if (req.body.from.length == 0) {
    res.status(400).json({ error: "From must not be an empty string" });
  } else {
    next();
  }
}

function checkForCategoryKey(req, res, next) {
  if (!req.body.hasOwnProperty("category")) {
    req.status(400).json({ error: "Transaction must have a category key" });
  } else if (typeof req.body.category != "string") {
    res.status(400).json({ error: "Category must be a string" });
  } else if (req.body.category.length == 0) {
    res.status(400).json({ error: "Category must not be an empty string" });
  } else {
    next();
  }
}

module.exports = {
  checkForItemNameKey,
  checkForAmountKey,
  checkForDateKey,
  checkForFromKey,
  checkForCategoryKey,
};
