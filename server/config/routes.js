var path = require('path');

module.exports = function(app, express) {
  
  app.get('/reference', function(req, res){
    res.sendFile(path.join(__dirname + './../../staticPages/html/reference.html'));
  });
  app.get('*', function(req,res){
    console.log(__dirname)
    res.sendFile(path.join(__dirname + './../../staticPages/html/splash.html'));
  });
};
