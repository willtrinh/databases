var db = require('../db');

module.exports = {
  getAll: function (callback) {
    var queryString = 'SELECT * FROM users';
    db.query(queryString, (err, results) => {
      callback(err, results);
    });
  },
  create: function (params, callback) {
    var queryString = 'INSERT INTO users(username) VALUES (?)';
    db.query(queryString, params, (err, results) => {
      callback(err, results);
    });
  }
};
