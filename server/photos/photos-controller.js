var request = require('request');
var env = require('../config/env.js');
// Set environment variable withing env.js
// process.env['myImgur_clientId'] = 'your clientId'

module.exports = {
  getAllPhotos: function(req, res, next) {

    var url = 'https://api.imgur.com/3/gallery/hot/viral/0.json'
    request({
      url: url,
      method: 'GET',
      headers: {
        'Authorization': 'Client-ID ' + process.env.myImgur_clientId
      }
    }, function(error, response, body) {
      if (error) {
        console.log('Error retrieving images: ', err);
        res.send(404);
      } else {
        res.json(JSON.parse(body));
      }
    })
  }
};