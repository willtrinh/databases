var db = require('../db');

module.exports = {
  getAll: function (callback) {
    var queryString = 'SELECT * FROM users';
    db.query(queryString, function(err, results) {
      callback(err, results);
    });
  },
  create: function (params, callback) {
    var queryString = 'INSERT INTO users(username) VALUES (?)';
    db.query(queryString, params, function(err, results) {
      callback(err, results);
    });
  }
};
