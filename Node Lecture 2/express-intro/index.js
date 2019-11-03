const express = require("express");
const app = express();
const productsRouter = require("./routes/products");
app.use(express.static("public"));
app.set("view engine", "pug");
app.use(express.json());
app.use(productsRouter);

app.get("/", (req, res) => {
  let products = ["Samsung A30", "IPhone", "Alto 2019"];
  let msg = "My message";
  res.render("homepage", { products, msg });
});
app.get("/products", (req, res) => {
  res.render("products");
});
app.get("/contacts", (req, res) => {
  res.render("contacts");
});

app.listen("5000", function() {
  console.log("Running on Port localhost:5000");
});
