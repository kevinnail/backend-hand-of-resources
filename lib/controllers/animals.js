const { Router } = require('express');
const { Animal } = require('../models/Animal');

module.exports = Router().get('/', async (req, res, next) => {
  try {
    const animal = await Animal.getAll();
    res.json(animal);
  } catch (e) {
    next(e);
  }
});
