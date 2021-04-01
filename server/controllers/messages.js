var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.messages.getAll((err, results) => {
      if (err) {
        console.log(err);
      } else {
        res.json(results);
      }
    });
  }, // a function which handles a get request for all messages
  post: function (req, res) {
    var params = [req.body.message, req.body.username, req.body.roomname];
    models.messages.create(params, (err, results) => {
      if (err) {
        console.log(err);
      } else {
        res.sendStatus(201);
      }
    });
  } // a function which handles posting a message to the database
};
