const express = require('express');
const router = express.Router();

router.post('/', (req, res, next) => {
    res.status(200).send('OK');
});

module.exports = router;