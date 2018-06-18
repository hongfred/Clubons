'use strict';
var express = require('express');
var router = express.Router();
var myDB = require('../function/database')


router.post('/', function (req, res) {
    console.log(req.body)
    var sql = "INSERT INTO innodb.test(`name`,`long`,`lat`,`description`,`address`,`date`,`heure`) VALUES('"+req.body.name+"',"+req.body.long+","+req.body.lat+",'"+req.body.description+"','"+req.body.address+"','"+req.body.date+"','"+req.body.heure+"');";
    myDB.InsertInto(sql)
    res.json(
        'Insert done'
    );
});
module.exports = router;
