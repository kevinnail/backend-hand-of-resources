const { Router } = require('express');
const { Customers } = require('../models/Customer');

module.exports = Router()
  .get('/:id', async (req, res, next) => {
    try {
      const customer = await Customers.getById(req.params.id);
      if (!customer) {
        next();
      }
      res.json(customer);
    } catch (e) {
      next(e);
    }
  })

  .get('/', async (req, res, next) => {
    try {
      const customer = await Customers.getAll();
      res.json(customer);
    } catch (e) {
      next(e);
    }
  })

  .post('/', async (req, res, next) => {
    try {
      const customer = await Customers.insert(req.body);
      res.json(customer);
    } catch (e) {
      next(e);
    }
  })

  .put('/:id', async (req, res, next) => {
    try {
      const customer = await Customers.updateById(req.params.id, req.body);
      res.json(customer);
    } catch (e) {
      next(e);
    }
  })

  .delete('/:id', async (req, res, next) => {
    try {
      const customer = await Customers.delete(req.params.id);
      res.json(customer);
    } catch (e) {
      next(e);
    }
  });
