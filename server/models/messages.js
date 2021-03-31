var db = require('../db');

module.exports = {
  getAll: function (callback) {
    var queryString = 'SELECT * FROM messages';
    db.dbConnection.query(queryString, (err, results) => {
      if (err) {
        throw err;
      } else {
        callback(results);
      }
    });
  }, // a function which produces all the messages
  create: function (message, createdAt, roomname, callback) {
    var queryString = `INSERT INTO messages(message, createdAt, roomname) VALUES (${message}, ${createAt}, ${roomname} )`;
    db.dbConnection.query(queryString, (err, results) => {
      if (err) {
        throw err;
      } else {
        callback();
      }
    });
  } // a function which can be used to insert a message into the database
};

// INSERT INTO table(column1,column2,...) values(value1, value2)