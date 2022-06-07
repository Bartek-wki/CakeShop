const express = require('express');
const router = express.Router();

const Pastry = require('../models/pastry.model');

router.get('/pastries', async (req, res) => {
  try {
    const pastries = await Pastry.find();
    res.json(pastries);
  }
  catch (err) {
    res.status(500).json({ message: err });
  }
});

module.exports = router