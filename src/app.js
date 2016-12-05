import './css/style.less';
require('font-awesome-webpack');

import angular from 'angular';
// import Angular2To1 from 'angular2to1';
import AngularUiRouter from 'angular-ui-router';
import AngularAnimate from 'angular-animate';
import AngularSanitize from 'angular-sanitize';
import AngularBootstrap from 'angular-ui-bootstrap';
/*eslint-disable */
import LocalStorageModule from 'angular-local-storage';
/*eslint-enable */
import AppCore from './core';

const appName = 'myApp';

angular.module(appName, [
  // framework wide components
  AngularUiRouter,
  AngularAnimate,
  AngularSanitize,
  AngularBootstrap,

  // services
  'LocalStorageModule',
  AppCore,
  
])
.config(config);

/* @ngInject */
function config ($stateProvider, $urlRouterProvider, localStorageServiceProvider) {

  localStorageServiceProvider.setPrefix(appName);

  $stateProvider
    .state('home', {
      url: '/',
      controller: ['$scope', function ($scope) {
        $scope.title = 'mlding';
        $scope.note = 'come on';
      }],
      templateUrl: './components/home/home.html'
    });

  $urlRouterProvider.otherwise('/');
}

angular.element(document).ready(() => {
  angular.bootstrap(document, [appName]);
});
