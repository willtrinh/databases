var db = require('../db');

module.exports = {
  getAll: function (callback) {
    var queryString = 'SELECT m.id, m.text, u.username, m.roomname \
                      FROM messages m LEFT OUTER JOIN users u ON (m.user_id = u.id) \
                      ORDER BY m.id DESC';
    db.query(queryString, (err, results) => {
      callback(err, results);
    });
  }, // a function which produces all the messages
  create: function (reqBody, callback) {
    console.log('messages body: ', reqBody);
    var queryString = 'INSERT INTO messages(text, user_id, roomname) \
                       VALUE (?, (SELECT id FROM users WHERE username = ? limit 1), ?)';
    db.query(queryString, reqBody, (err, results) => {
      callback(err, results);
    });
  } // a function which can be used to insert a message into the database
};


//SELECT message, username, roomname FROM messages JOIN users ON messages.user_id=users.id