var mysql = require('mysql');

// Create a database connection and export it from this file.
// Confirm that the credentials supplied for the connection are correct.
var dbConnection = mysql.createConnection({
  user     : 'root',
  password : '',
  database : 'chat'
});
dbConnection.connect((err) => {
  if (err) {
    console.log(err);
    return;
  } else {
    console.log('Database connected');
  }
})

module.exports.dbConnection = dbConnection;
