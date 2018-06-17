'use strict';
var express = require('express');
var router = express.Router();
var myDB = require('../function/database')

router.get('/', function (req, res) {
    var sql = "SELECT * FROM innodb.my_events;";
    console.log(sql);
    myDB.Select(sql)
        .then(function (result) {
            console.log(result);
            res.json(
                result
            );
        })

});

module.exports = router;
