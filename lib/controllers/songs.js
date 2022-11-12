const { Router } = require('express');
const { Songs } = require('../models/Song');

module.exports = Router().get('/', async (req, res) => {
  const songs = await Songs.getAll();
  res.json(songs);
});
