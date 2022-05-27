const express = require('express');
const router = express.Router();

router.post('/', (req,res) => {
    res.status(201).send({
        "destination": {"id":"100", "balance":10}
    });
});

module.exports = router;