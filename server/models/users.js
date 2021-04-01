var db = require('../db');

module.exports = {
  getAll: function (callback) {
    var queryString = 'SELECT * FROM users';
    console.log(queryString);
    db.dbConnection.query(queryString, (err, results) => {
      if (err) {
        throw err;
      } else {
        callback(results);
      }
    });
  },
  create: function (username) {
    console.log(username);
    var queryString = `INSERT INTO users(username) VALUES ('${username}')`;
    db.dbConnection.query(queryString, (err, results) => {
      if (err) {
        throw err;
      }
    });
  }
};
