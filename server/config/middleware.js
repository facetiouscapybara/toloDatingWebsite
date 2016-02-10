var bodyParser = require('body-parser');
var morgan = require('morgan');

module.exports = function(app, express) {
  app.use(express.static(__dirname + '../../../staticPages/'));
  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
      res.status(401).send('invalid token');
    }
  });
};