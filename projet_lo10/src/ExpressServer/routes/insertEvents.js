'use strict';
var express = require('express');
var router = express.Router();
var myDB = require('../function/database')


router.post('/', function (req, res) {
    console.log(req.body)
    var sql = "INSERT INTO innodb.test(`name`,`long`,`lat`,`description`,`address`,`date`,`heure`) VALUES('"+req.body.name+"',"+req.body.long+","+req.body.lat+",'"+req.body.description+"','"+req.body.address+"','"+req.body.date+"','"+req.body.heure+"');";
    myDB.InsertInto(sql)
      .then(function(reponse){
        console.log(reponse)
        sql = "SELECT * FROM innodb.test;";
        myDB.Select(sql)
            .then(function (result) {
                console.log(result);
                res.json(
                    result
                );
            })
      })

});
module.exports = router;
