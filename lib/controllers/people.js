const { Router } = require('express');
const { People } = require('../models/People');

module.exports = Router()
  .get('/', async (req, res, next) => {
    try {
      const people = await People.getAll();
      res.json(people);
    } catch (e) {
      next(e);
    }
  })

  .get('/:id', async (req, res, next) => {
    try {
      const person = await People.getById(req.params.id);
      res.json(person);
    } catch (e) {
      next(e);
    }
  });
