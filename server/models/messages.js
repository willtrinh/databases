var db = require('../db');

module.exports = {
  // a function which produces all the messages
  getAll: function (callback) {
    var queryString = 'SELECT m.id, m.text, m.roomname, u.username \
                      FROM messages m LEFT OUTER JOIN users u ON (m.user_id = u.id) \
                      ORDER BY m.id DESC';
    db.query(queryString, function(err, results) {
      callback(err, results);
    });
  },
  // a function which can be used to insert a message into the database
  create: function (reqBody, callback) {
    var queryString = 'INSERT INTO messages(text, user_id, roomname) \
                       VALUE (?, (SELECT id FROM users WHERE username = ? limit 1), ?)';
    db.query(queryString, reqBody, function(err, results) {
      callback(err, results);
    });
  }
};