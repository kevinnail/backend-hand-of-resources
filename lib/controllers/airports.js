const { Router } = require('express');
const { Airport } = require('../models/Airport');

module.exports = Router().get('/', async (req, res) => {
  const airport = await Airport.getAll();
  res.json(airport);
});
