var express = require("express");
var router = express.Router();

var products = ["Pen", "Pencil", "Coke"];
// get All Products
router.get("/", function(req, res, next) {
  res.send(products);
});

module.exports = router;
