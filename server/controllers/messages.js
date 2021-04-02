var models = require('../models');

module.exports = {
  // a function which handles a get request for all messages
  get: function (req, res) {
    // Message.findAll({ include: [User] }) // include: [User] will perform left outer join by default
    //   .complete(function(err, results) {
    //     if (err) {
    //       console.log(err);
    //     } else {
    //       res.json(results);
    //     }
    //   });
    models.messages.getAll(function(err, results) {
      if (err) {
        console.log(err);
      } else {
        res.json(results);
      }
    });
  },
  // a function which handles posting a message to the database
  post: function (req, res) {
    // User.findOrCreate({username: req.body.username}).complete(function(err, user) {
    //   var params = {
    //     text: req.body.message,
    //     'user_id': user.id,
    //     roomname: req.body.roomname
    //   };
    //   Message.create(params)
    //     .complete(function(err, results) {
    //       res.sendStatus(201);
    //     });
    // });


    var params = [req.body.message, req.body.username, req.body.roomname];
    models.messages.create(params, function(err, results) {
      if (err) {
        console.log(err);
      } else {
        res.sendStatus(201);
      }
    });
  }
};
