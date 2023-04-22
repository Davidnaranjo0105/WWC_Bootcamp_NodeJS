const mongoose = require("mongoose");

const ProductsSchema = mongoose.Schema({
    name: {type: String, require: true},
    description: {type: String, require: false},
    availableUnits: {type: String, require: true, default: 0},
    price: {type: String, require: true},
    category: {type: String, require: false}

});

exports.Product = mongoose.model("products", ProductsSchema);