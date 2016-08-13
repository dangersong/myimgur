angular.module('myImgur.services', [])
  .service('feedModel', function($http, $q) {

  // get feed
  var getFeed = function() {
    var req = $http(
      {
        method: 'get',
        url: '/api/feed',
        params: {
          action: "get"
        }
      }
    );
    return req.then(extract, handleError);
  }

  // error handler
  var handleError = function(res) {
    // catch unknown errors
    if (!angular.isObject(res.data) || !res.data.message) {
      return $q.reject("Unknown error.");
    }
    // handle error message
    return $q.reject(res.data.message);
  }
  
  // extract data
  var extract = function(res) {
    return res.data;
  }
  
  // return API
  return { getFeed: getFeed };  
});