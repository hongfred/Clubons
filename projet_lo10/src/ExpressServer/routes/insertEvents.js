'use strict';
var express = require('express');
var router = express.Router();
var myDB = require('../function/database')


router.post('/', function (req, res) {
    console.log("je suis dans le post")
    console.log(JSON.stringify(req.body))
    //var cas = JSON.stringify(req.body[0].cas)
    var sql = "INSERT INTO innodb.test(`name`,`long`,`lat`,`description`,`date`,`heure`) VALUES('lol',51,23,'lolol','2018-03-18','23:25');";
    //myDB.InsertInto(sql)
    res.json(
        'Insert done'
    );
});
module.exports = router;
