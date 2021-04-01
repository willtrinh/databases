var models = require('../models');

module.exports = {
  get: function (req, res) {
    res.statusCode = 200;
    models.users.getAll((err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.end(JSON.stringify(data));
      }
    });
  },
  post: function (req, res) {
    res.statusCode = 201;
    models.users.create(req.body.username, (err) => {
      if (err) {
        console.log(err);
      } else {
        res.end();
      }
    });
  }
};
