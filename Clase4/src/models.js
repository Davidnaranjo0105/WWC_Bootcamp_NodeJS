const mongoose = require("mongoose");

const ProductsSchema = mongoose.Schema({
  name: { type: String, require: true, default: "N/A" },
	description: { type: String, require: false },
	availableUnits: { type: Number, require: false, default: 0 },
	price: { type: Number, require: true },
	category: { type: String, require: true },
});
  module.exports = mongoose.model('products', ProductsSchema);








