const { Router } = require('express');
const { People } = require('../models/People');

module.exports = Router()
  .get('/:id', async (req, res, next) => {
    try {
      const person = await People.getById(req.params.id);
      if (!person) {
        next();
      }
      res.json(person);
    } catch (e) {
      next(e);
    }
  })
  .get('/', async (req, res, next) => {
    try {
      const people = await People.getAll();
      res.json(people);
    } catch (e) {
      next(e);
    }
  })

  .post('/', async (req, res, next) => {
    try {
      const resp = await People.insert(req.body);

      res.json(resp);
    } catch (e) {
      next(e);
    }
  })

  .put('/:id', async (req, res, next) => {
    try {
      const person = await People.updateById(req.params.id, req.body);
      res.json(person);
    } catch (e) {
      next(e);
    }
  })

  .delete('/:id', async (req, res, next) => {
    try {
      const data = await People.delete(req.params.id);

      res.json(data);
    } catch (e) {
      next(e);
    }
  });
