const express = require('express');
const app = express();
const morgan = require('morgan');

const routeReset = require('./routes/reset');
const routeEvent = require('./routes/event');
const routeBalance = require('./routes/balance');

app.use(morgan('dev'));

app.use('/reset', routeReset)
app.use('/event', routeEvent);
app.use('/balance', routeBalance);




module.exports = app;