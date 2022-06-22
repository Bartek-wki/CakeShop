const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  orderer: {
    type: {
      name: { type: String, required: true },
      email: { type: String, required: true },
      phone: { type: String, required: true },
      address: { type: String, required: true },
      comments: { type: String },
    }
  },
  order: { type: Array, required: true },
})

module.exports = mongoose.model('Order', orderSchema);