const express = require("express");
let products = ["Samsung A30", "IPhone", "Alto 2019"];
const router = express.Router();
router.get("/api/products", (req, res) => {
  res.send(products);
});
router.post("/api/products", (req, res) => {
  //receives a post request
  console.log(req.body);
  products.push(req.body.name);
  res.send(products);
});
module.exports = router;
