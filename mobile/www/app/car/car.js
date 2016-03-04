(function() {
  'use strict';
  angular.module('starter')
    .config(function ($stateProvider) {
      $stateProvider
        .state('car-create', {
          url: '/car/create',
          templateUrl: 'app/car/create/create.html',
          controller: 'CreateController as create'
        })
        .state('car.detail', {
          url: '/detail/:id',
          views: {
            'menuContent' :{
              templateUrl: 'app/car/detail/detail.html',
              controller: 'DetailController as detail'
            }
          }
        })
        .state('car', {
          url: "/car",
          abstract: true,
          templateUrl: "app/car/menu.html"
        })
        .state('car.refuel-create', {
          url: '/refuel/create',
          views: {
            'menuContent' :{
              templateUrl: 'app/car/refuel/form.html',
              controller: 'RefuelCreateController as form'
            }
          }
        })
        .state('car.refuel-view', {
          url: '/refuel/view',
          views: {
            'menuContent' :{
              templateUrl: 'app/car/refuel/view/view.html',
              controller: 'RefuelViewController as view'
            }
          }
        })
        .state('car.refuel-edit', {
          url: '/refuel/edit/:id',
          views: {
            'menuContent' :{
              templateUrl: 'app/car/refuel/form.html',
              controller: 'RefuelEditController as form'
            }
          }
        })
        .state('car.refuel-chart', {
          url: '/refuel/chart',
          views: {
            'menuContent' :{
              templateUrl: 'app/car/detail/detail.html'
            }
          }
        });
    });
})();
