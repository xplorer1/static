angular.module('MainModule', [
    'ControllersModule',
    'ui.router',
    'ngCookies'
])
    .config(['$stateProvider', function($stateProvider) {
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'index.html',
                controller: 'MainController'
            })
            .state('login', {
                url: '/login',
                templateUrl: 'templates/login.html',
                controller: 'LoginController'
            })
            .state('register', {
                url: '/register',
                templateUrl: 'templates/register.html',
                controller: 'RegisterController'
            })
            .state('tracks', {
                url: '/tracks',
                templateUrl: 'templates/tracks.html',
                controller: 'TracksController'
            })
            .state('spell', {
                url: '/spell',
                templateUrl: 'templates/saytheword.html',
                controller: 'GameController'
            })
            .state('dashboard', {
                url: '/dashboard',
                templateUrl: 'templates/dashboard.html',
                controller: 'DashboardController'
            })
            .state('newguys', {
                url: '/newguys',
                templateUrl: 'templates/newguys.html',
                controller: 'NewGuysController'
            })
    }]);