const { Router } = require('express');
const { Business } = require('../models/Business');

module.exports = Router().get('/', async (req, res, next) => {
  try {
    const businesses = await Business.getAll();
    res.json(businesses);
  } catch (e) {
    next(e);
  }
});
