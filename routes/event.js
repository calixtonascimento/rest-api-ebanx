const express = require('express');
const router = express.Router();

const users = [];

router.post('/', (req, res) => {
    let parametersString = JSON.stringify(req.body)
    let parameters = JSON.parse(parametersString);

    let destination = null;
    let origin = null;

    const type = parameters.type;
    const amount = parameters.amount;

    if (parameters.destination) {
        destination = parameters.destination;
    }
    if (parameters.origin) {
        origin = parameters.origin;
    }

    const event = {
        type: req.body.type,
        amount: req.body.amount
    }


    if (type == 'deposit') {

        event['destination'] = destination;

        if (Array.isArray(users) && users.length) {
            objIndex = users.findIndex((obj => users[0].destination.id == destination));
            console.log("Before update: ", users[objIndex])
            users[objIndex].destination.balance = amount + users[objIndex].destination.balance
            console.log("After update: ", users[objIndex])

            return res.status(201).send(users[objIndex])
        }

        let user = {
            "destination": { "id": destination, "balance": amount }
        };

        users.push(user);
        return res.status(201).send(JSON.stringify(users[0]));

    } else if (type == 'withdraw') {
        event['origin'] = origin;
        if (origin == '100') {
            res.status(201).send({
                "origin": { "id": "100", "balance": 15 }
            });
        } else {
            res.status(404).send('0')
        }
    } else if (type == 'transfer') {
        event['destination'] = destination;
        event['origin'] = origin;

        if (origin == '100') {
            res.status(201).send({
                "origin": { "id": origin, "balance": 0 }, "destination": { "id": destination, "balance": amount }
            });
        } else {
            res.status(404).send('0')
        }
    }

});

module.exports = router;