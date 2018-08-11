const express = require('express')
    , router = express.Router();

router.route('/')
    .get((req, res) => {
        res.send({api: "reference"});
    });

module.exports = router;
