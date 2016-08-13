module.exports = function(app, express){
var photosController = require('../photos/photos-controller.js');

  app.get('/', function(req, res){
    res.render('index');
  });

  app.get('/api/feed', photosController.getAllPhotos);
}