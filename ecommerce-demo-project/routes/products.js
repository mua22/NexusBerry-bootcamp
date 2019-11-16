var express = require("express");
const mongoose = require("mongoose");
var router = express.Router();
const productSchema = mongoose.Schema({
  name: String
});
const Product = mongoose.model("Product", productSchema);
router.get("/products", async (req, res, next) => {
  const products = await Product.find();
  //console.log(products);
  res.render("products/list", { products });
});

module.exports = router;
