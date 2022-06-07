const mongoose = require('mongoose');

const pastrySchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  taste: { type: Array },
  basePrice: { type: Number, required: true },
  raitings: { type: Number, required: true },
  images: { type: Array, required: true },
  text: { type: String }
});

module.exports = mongoose.model('Pastry', pastrySchema);