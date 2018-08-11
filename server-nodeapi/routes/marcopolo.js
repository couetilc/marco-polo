const express = require('express');
const router = express.Router();

//register new user
router.route('marco')
    .get((req, res) => {
        res.send({});
    });
//set specified user as polo
router.route('/marco/:polo')
    .get((req, res) => {
        res.send({});
    });
//update location
//  request body contains timestamp and coords.
router.route('/polo/:username')
    .post((req, res) => {
        res.send({});
    });

module.exports = router;
