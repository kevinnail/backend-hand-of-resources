const express = require('express');

const app = express();

// Built in middleware
app.use(express.json());

// App routes

app.use('/people', require('./controllers/people'));
app.use('/animals', require('./controllers/animals'));
app.use('/songs', require('./controllers/songs'));
app.use('/customers', require('./controllers/customers'));
app.use('/businesses', require('./controllers/businesses'));

// Error handling & 404 middleware for when
// a request doesn't match any app routes
app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
