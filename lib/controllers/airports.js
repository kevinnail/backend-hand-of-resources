const { Router } = require('express');
const { Airport } = require('../models/Airport');

module.exports = Router()
  .get('/:id', async (req, res) => {
    const airport = await Airport.getById(req.params.id);
    res.json(airport);
  })

  .get('/', async (req, res) => {
    const airport = await Airport.getAll();
    res.json(airport);
  });
