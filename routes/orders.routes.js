const express = require('express');
const router = express.Router();

const Order = require('../models/order.model');

router.post('/orders', async (req, res) => {
  try {
    const orderer = req.body.orderer;
    const order = req.body.order;

    if (orderer.forename.length > 3 && orderer.email.length > 3 && orderer.phone.length > 3 && orderer.address.length > 3 && order.length > 0) {
      const newOrder = new Order({
        orderer: {
          name: orderer.forename,
          email: orderer.email,
          phone: orderer.phone,
          address: orderer.address,
          comments: orderer.orderComments,
        },
        order: order
      });
      await newOrder.save();
      res.json({ message: 'OK', id: newOrder._id });
    } else {
      res.status(404).json({message: 'Wrong data'})
    }
  }
  catch (err) {
    res.status(500).json({ message: err });
  }
});

module.exports = router;