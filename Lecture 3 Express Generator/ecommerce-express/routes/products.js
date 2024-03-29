var express = require("express");
var mongoose = require("mongoose");
var router = express.Router();
var Product = mongoose.model(
  "Product",
  mongoose.Schema({
    name: String,
    price: Number
  })
);
var products = ["Pen", "Pencil", "Coke"];
// get All Products
router.get("/", async function(req, res, next) {
  var items = await Product.find()
    .select({ name: 1 })
    .limit(3)
    .sort({ name: 1 });
  res.send(items);
});
// get Single Products
router.get("/:id", function(req, res, next) {
  if (!products[req.params.id]) {
    return res.status(404).send("Product Not Found");
  }
  res.send(products[req.params.id]);
});

//delete a product
router.delete("/:id", (req, res) => {
  products.splice(req.params.id, 1);
  res.send(products);
});
//create a product
router.post("/", async (req, res) => {
  var pro = new Product();
  pro.name = req.body.name;
  //pro.price = req.body.price;
  await pro.save();
  res.send(pro);
});
//patching
router.patch("/:id", (req, res) => {
  products[req.params.id] = req.body.name;
  res.send(products);
});
module.exports = router;
