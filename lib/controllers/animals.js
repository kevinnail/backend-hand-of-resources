const { Router } = require('express');
// const { response } = require('../app.js');
const { Animal } = require('../models/Animal');

module.exports = Router()
  .get('/:id', async (req, res) => {
    const animal = await Animal.getById(req.params.id);
    res.json(animal);
  })

  .get('/', async (req, res, next) => {
    try {
      const animal = await Animal.getAll();
      res.json(animal);
    } catch (e) {
      next(e);
    }
  })

  .post('/', async (req, res, next) => {
    try {
      const animal = await Animal.insert(req.body);
      res.json(animal);
    } catch (e) {
      next(e);
    }
  })

  .put('/:id', async (req, res) => {
    const animal = await Animal.updateById(req.params.id, req.body);
    res.json(animal);
  });
