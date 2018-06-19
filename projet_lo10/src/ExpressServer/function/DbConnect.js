'use strict';
var mysql = require('mysql');
var Promise = require('bluebird');

module.exports.DBConnect = function (uid, pass) {
    //regarder pool pour la connection
    var pool = mysql.createPool({
        host: 'lo10-database.clqlzuatnlda.eu-west-3.rds.amazonaws.com',
        user: uid,
        password: pass,
        database: 'innodb',
        port: 3306
    });

    this.Select = function (query) {
        return new Promise(
            function (resolve, reject) {
                pool.getConnection(function (err, connection) {
                    if (err) throw err;
                    connection.query(query, function (err, result, fields) {
                        resolve(result);
                    });
                    connection.release();
                });
            }
        );
    }

    this.Count = function (query) {
        return new Promise(
            function (resolve, reject) {
                    pool.getConnection(function (err, connection) {
                        if (err) throw err;
                        connection.query(query, function (err, result, fields) {

                            var compteur = result.length;
                            resolve(compteur);
                        });
                        connection.release();
                    });
            }
        );
    }

    this.InsertInto = function (query) {
      return new Promise(
          function (resolve, reject) {
            pool.getConnection(function (err, connection) {
                if (err) throw err;
                connection.query(query, function (err, result) {
                    resolve("insert data done");
                });
                connection.release();
            });
          }
      );
    }
    this.Delete = function (query) {
        pool.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query(query, function (err, result) {
                console.log("delete done");
            });
            connection.release();
        });
    }

}
