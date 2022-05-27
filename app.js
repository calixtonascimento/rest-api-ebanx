const express = require('express');
const app = express();

const routeReset = require('./routes/reset');
const routeEvent = require('./routes/event');
const routeBalance = require('./routes/balance');

app.use('/event', routeEvent);
app.use('/balance', routeBalance);




module.exports = app;