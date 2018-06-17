var mysql = require('mysql');
var pUID = 'hongfred';
var pPASS = '02021995';
var DB = require('./DbConnect.js');

var myDB;

function connectDatabase() {
    if (!myDB) {
        var myDB = new DB.DBConnect(pUID, pPASS);
    }
    return myDB;
}

module.exports = connectDatabase();
