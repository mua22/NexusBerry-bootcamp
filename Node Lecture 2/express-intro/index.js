const express = require("express");
const app = express();
app.use(express.json());
let products = ["Samsung A30", "IPhone", "Alto 2019"];
app.get("/", (req, res) => {
  res.send(products);
});
app.post("/", (req, res) => {
  //receives a post request
  console.log(req.body);
  products.push(req.body.name);
  res.send(products);
});
app.listen("5000", function() {
  console.log("Running on Port localhost:5000");
});
