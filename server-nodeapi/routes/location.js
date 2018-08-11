const express = require('express');
const router = express.Router();
const aws = require('aws-sdk');
const db = new aws.DynamoDB();
//const credentials = new aws.SharedIniFileCredentials();
//aws.config.credentials = credentials;
//console.log(credentials);
let userLocations = [{
    username: "always_marco",
    position: {
        lat: 27.9881,
        lon: 86.9250
    },
    timestamp: "ages ago"
}];

// return list of all users and location
router.route('/location')
    .get((req, res) => {
        res.send({users: userLocations});
    });
// return location of specified user
//username is at req.params.username
router.route('/location/:username')
    .get((req, res) => {
        res.send({username: req.params.username});
    });

function getAllUsers() {
    return new Promise((resolve, reject) => {
        db.scan({
            TableName: "marcos-polos"
        }).promise()
        .then(data => {
            console.log(data);
            resolve(data);
        })
        .catch(error => {
            console.log(error);
            reject(error);
        });
    })
}

function getUser() {

}

module.exports = router;
