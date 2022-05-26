const express = require('express');
const app = express();

const routeEvent = require('./routes/event');
const routeBalance = require('./routes/balance');

app.use('/reset', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Ok'
    });
});

module.exports = app;