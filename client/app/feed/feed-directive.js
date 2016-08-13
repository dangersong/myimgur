// lazy load images
angular.module('myImgur.directives', [])
  .directive('lazyLoad', function($timeout) {

    return {
      restrict: 'C',
      link: function (scope, elm, attrs) {
        $timeout(function() { $(elm).lazyload() }, 0); 
      }
    }
  })