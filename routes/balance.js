const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const id = req.query.account_id;
    console.log(id);

    if(id === '100'){
        res.status(200).send({
            status : "Ok"
        });
    }else{
        res.status(404).send({
            status : "Error"
        });
    }
});

module.exports = router;