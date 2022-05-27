const express = require('express');
const router = express.Router();

router.post('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Ok'
    });
});

module.exports = router;