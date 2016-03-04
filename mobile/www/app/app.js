// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', [
        'ionic',
        'ngResource',
        'starter.controllers',
        'starter.services',
        'ngCordovaMocks',
        'LocalStorageModule'

    ])

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleLightContent();
            }
        });
    })
    .run(function ($ionicLoading, $rootScope) {
        $rootScope.$on('loading:show', function () {
            $ionicLoading.show()
        })

        $rootScope.$on('loading:hide', function () {
            $ionicLoading.hide()
        })
    })
    .run(function (AuthService, $state, localStorageService) {
        var info = localStorageService.get('login-info');
        if (info) {
            var callback = function (err) {
                if (err) {
                    $state.go('home');
                }
            };
            AuthService.login(info, callback);
        }
    })
    .config(function (localStorageServiceProvider) {
        localStorageServiceProvider
            .setPrefix('am');
    })
    .config(function ($stateProvider, $urlRouterProvider, $httpProvider) {

        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'templates/welcome/home.html'
            });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/home');
        $httpProvider.interceptors.push('authInterceptor');
    });


