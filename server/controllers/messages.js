var models = require('../models');

module.exports = {
  get: function (req, res) {
    res.statusCode = 200;
    models.messages.getAll((err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.end(JSON.stringify(data));
      }
    });
  }, // a function which handles a get request for all messages
  post: function (req, res) {
    res.statusCode = 201;
    // create (messages, createdAt, roomname)
    models.messages.create(req.body.messages, null, req.body.roomname, (err) => {
      if (err) {
        console.log(err);
      } else {
        res.end();
      }
    });
  } // a function which handles posting a message to the database
};
