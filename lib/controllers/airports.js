const { Router } = require('express');
const { Airport } = require('../models/Airport');

module.exports = Router()
  .get('/:id', async (req, res, next) => {
    try {
      const airport = await Airport.getById(req.params.id);
      res.json(airport);
    } catch (e) {
      next(e);
    }
  })

  .get('/', async (req, res, next) => {
    try {
      const airport = await Airport.getAll();
      res.json(airport);
    } catch (e) {
      next(e);
    }
  });
