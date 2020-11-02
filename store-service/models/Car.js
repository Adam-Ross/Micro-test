const mongoose = require("mongoose");

const CarSchema = mongoose.Schema({
  make: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  package: {
    type: String,
    required: true,
  },
  color: {
    type: String,
  },
  year: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  mileage: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("car", CarSchema);
