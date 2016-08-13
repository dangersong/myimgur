angular.module('myImgur.controllers', [])
  .controller('AppCtrl', function ($scope, feedModel) {
    var ctrl = this;

    // list of posts for rendering
    ctrl.posts = [];

    // inital mobile header state
    ctrl.showMobileMainHeader = true;
    
    // filter data
    var filterPosts = function(col, str) {
      return _.filter(col, function(val) {
        if (val.type === str) {
          return val; 
        }
      });
    };

    // apply the remote data to the local scope
    var applyFeed = function(posts) {
      ctrl.posts = filterPosts(posts, 'image/gif');
    };

    // load posts data
    var loadFeed = function() {
      feedModel.getFeed()
        .then(
          function(posts) {
            applyFeed(posts.data);
          }
        )
    };
    
    loadFeed();
  });