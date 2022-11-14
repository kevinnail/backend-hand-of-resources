const { Router } = require('express');
const { App } = require('../models/AppDataSet');

module.exports = Router()
  .get('/:id', async (req, res, next) => {
    try {
      const app = await App.getById(req.params.id);
      res.json(app);
    } catch (e) {
      next(e);
    }
  })

  .get('/', async (req, res, next) => {
    try {
      const app = await App.getAll();
      res.json(app);
    } catch (e) {
      next(e);
    }
  })

  .post('/', async (req, res, next) => {
    try {
      const app = await App.insert(req.body);
      res.json(app);
    } catch (e) {
      next(e);
    }
  });
