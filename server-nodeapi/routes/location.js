const express = require('express');
const router = express.Router();
const aws = require('aws-sdk');
const db = new aws.DynamoDB();

// return list of all users and location
router.route('/location')
    .get((req, res) => {
        getAllUsers();
        res.send({message: "hello-world"});
    });
// return location of specified user
//username is at req.params.username
router.route('/location/:username')
    .get((req, res) => {
        res.send({username: req.params.username});
    });

function getAllUsers() {
    db.scan({
        TableName: "marcos-polos"
    }).promise()
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });
}

function getUser() {

}

module.exports = router;
