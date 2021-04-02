var mysql = require('mysql');
// var Sequelize = require('sequelize');
// var orm = new Sequelize('chat', 'root', '', {
//   dialect: 'mysql'
// }); // database, user, password

// var User = orm.define('User', {
//   username: Sequelize.STRING
// });

// var Message = orm.define('Message', {
//   user_id: Sequelize.INTEGER,
//   text: Sequelize.STRING,
//   roomname: Sequelize.STRING
// });

// User.hasMany(Message);
// Message.belongsTo(User);

// User.sync();
// Message.sync();

// exports.User = User;
// exports.Message = Message;

// Create a database connection and export it from this file.
// Confirm that the credentials supplied for the connection are correct.
var connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'chat'
});
connection.connect();

module.exports = connection;