const { Router } = require('express');
const { Customers } = require('../models/Customer');

module.exports = Router().get('/', async (req, res) => {
  try {
    const customer = await Customers.getAll();
    res.json(customer);
  } catch (e) {
    next(e);
  }
});
