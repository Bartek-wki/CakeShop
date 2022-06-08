const express = require('express');
const router = express.Router();

const Pastry = require('../models/pastry.model');

router.get('/pastries', async (req, res) => {
  try {
    const pastries = await Pastry.find().select('-text');
    res.json(pastries);
  }
  catch (err) {
    res.status(500).json({ message: err });
  }
});

router.get('/pastries/top', async (req, res) => {
  try {
    const topPastries = await Pastry.find().select('-taste -category -text').sort({raitings: -1}).limit(5);
    res.json(topPastries);
    
  }
  catch (err) {
    res.status(500).json({ message: err });
  }
});

router.get('/pastries/:id', async (req, res) => {
  try {
    const pastry = await Pastry.findById(req.params.id);
    res.json(pastry);
  }
  catch (err) {
    res.status(500).json({ message: err });
  }
});

module.exports = router