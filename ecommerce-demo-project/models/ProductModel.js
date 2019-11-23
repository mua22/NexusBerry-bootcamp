const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
  name: String,
  price: String
});
const Product = mongoose.model("Product", productSchema);
const validateProduct = product => {
  return true;
};
module.exports = {
  Product,
  validateProduct,
  productSchema
};
