const { Router } = require('express');
const { People } = require('../models/People');

module.exports = Router().get('/', async (req, res) => {
  const people = await People.getAll();
  res.json(people);
});
