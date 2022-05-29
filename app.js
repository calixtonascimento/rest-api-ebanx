const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const routeReset = require('./routes/reset');
const routeEvent = require('./routes/event');
const routeBalance = require('./routes/balance');
const { application } = require('express');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.use('/reset', routeReset)
app.use('/event', routeEvent);
app.use('/balance', routeBalance);




module.exports = app;