const express = require('express');
const router = express.Router();

const Cake = require('../models/cake.model');

router.get('/cakes', async (req, res) => {
  try {
    const cakes = await Cake.find().select('-text');
    res.json(cakes);
  }
  catch (err) {
    res.status(500).json({ message: err });
  }
});

router.get('/cakes/top', async (req, res) => {
  try {
    const topCakes = await Cake.find({category: {$eq: 'standard cakes'}}).select('-taste -category -text').sort({raitings: -1}).limit(5);
    res.json(topCakes);
  }
  catch (err) {
    res.status(500).json({ message: err });
  }
});

router.get('/cakes/:id', async (req, res) => {
  try {
    const cake = await Cake.findById(req.params.id);
    res.json(cake);
  }
  catch (err) {
    res.status(500).json({ message: err });
  }
});

module.exports = router