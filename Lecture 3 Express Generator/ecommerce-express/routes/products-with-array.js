var express = require("express");
var router = express.Router();

var products = ["Pen", "Pencil", "Coke"];
// get All Products
router.get("/", function(req, res, next) {
  res.send(products);
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
router.post("/", (req, res) => {
  console.log(req.body);
  products.push(req.body.name);
  res.send(products);
});
//patching
router.patch("/:id", (req, res) => {
  products[req.params.id] = req.body.name;
  res.send(products);
});
module.exports = router;
