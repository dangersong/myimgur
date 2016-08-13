angular.module('myImgur', [
  'ui.router',
  'ngMaterial',
  'myImgur.controllers',
  'myImgur.services',
  'myImgur.directives'
])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('feed', {
        url:'/',
        templateUrl: 'app/feed/feed-tmpl.html',
        controller: 'AppCtrl',
        controllerAs: 'ctrl'
      })
  })
  .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
    .primaryPalette('grey', {
      'default': '50'
    })
    .accentPalette('red');
  })
  .constant('_', window._);