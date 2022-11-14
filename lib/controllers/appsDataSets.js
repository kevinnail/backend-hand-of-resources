const { Router } = require('express');
const { App } = require('../models/AppDataSet');

module.exports = Router().get('/', async (req, res, next) => {
  try {
    const app = await App.getAll();
    res.json(app);
  } catch (e) {
    next(e);
  }
});
