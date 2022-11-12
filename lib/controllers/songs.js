const { Router } = require('express');
const { Songs } = require('../models/Song');

module.exports = Router()
  .get('/:id', async (req, res, next) => {
    try {
      const song = await Songs.getById(req.params.id);
      res.json(song);
    } catch (e) {
      next();
    }
  })

  .get('/', async (req, res, next) => {
    try {
      const songs = await Songs.getAll();
      res.json(songs);
    } catch (e) {
      next(e);
    }
  })

  .post('/', async (req, res, next) => {
    try {
      const resp = await Songs.insert(req.body);
      res.json(resp);
    } catch (e) {
      next(e);
    }
  });
