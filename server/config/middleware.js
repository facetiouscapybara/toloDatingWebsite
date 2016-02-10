var bodyParser = require('body-parser');

module.exports = function(app, express) {
  app.use(express.static(__dirname + '../../../staticPages/'));
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
      res.status(401).send('invalid token');
    }
  });
};