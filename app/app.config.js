(function () {
  'use strict';
  angular
    .module('app.config', [])
    .config(['$routeProvider', routes]);

    function routes($routeProvider) {
      $routeProvider
        .when('/', {
            templateUrl: '',
            controller: ''
        });
    }
})();
