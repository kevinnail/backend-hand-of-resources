const { Router } = require('express');
const { Business } = require('../models/Business');

module.exports = Router()
  .get('/:id', async (req, res, next) => {
    try {
      const business = await Business.getById(req.params.id);
      if (!business) {
        next();
      }
      res.json(business);
    } catch (e) {
      next(e);
    }
  })

  .get('/', async (req, res, next) => {
    try {
      const businesses = await Business.getAll();
      res.json(businesses);
    } catch (e) {
      next(e);
    }
  })

  .post('/', async (req, res, next) => {
    try {
      const resp = await Business.insert(req.body);
      res.json(resp);
    } catch (e) {
      next(e);
    }
  })

  .put('/:id', async (req, res, next) => {
    try {
      const business = await Business.updateById(req.params.id, req.body);
      res.json(business);
    } catch (e) {
      next(e);
    }
  })

  .delete('/:id', async (req, res, next) => {
    try {
      const data = await Business.delete(req.params.id);
      res.json(data);
    } catch (e) {
      next(e);
    }
  });
