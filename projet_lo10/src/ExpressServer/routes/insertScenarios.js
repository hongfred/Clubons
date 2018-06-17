'use strict';
var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var Promise = require('bluebird');
var myDB = require('../function/database')


router.post('/', function (req, res) {6
    console.log(req.body[0].cas)
    var cas = JSON.stringify(req.body[0].cas)
    var sql = "INSERT INTO datafred (data) VALUES (" + cas + ")";
    myDB.InsertInto(sql)

    res.json(
        'Insert done'
    );
});
module.exports = router;

/*
INSERT INTO `innodb`.`my_events`
(`name`,
`long`,
`lat`,
`description`)
VALUES
('lol',
51,
53,
'mon cool event');
*/
