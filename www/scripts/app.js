var app = angular.module('app', ['ui.router'])
    .config(['$compileProvider', function ($compileProvider) {
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel|chrome-extension):/);
        $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel|chrome-extension):/);
    }])
    .config(['$stateProvider', '$urlRouterProvider', '$httpProvider', '$compileProvider',
        function ($stateProvider, $urlRouterProvider, $httpProvider, $compileProvider) {

        //$httpProvider.defaults.cache = false;
        //if (!$httpProvider.defaults.headers.get) {
        //    $httpProvider.defaults.headers.get = {};
        //}
        // disable IE ajax request caching
        //$httpProvider.defaults.headers.get['If-Modified-Since'] = '0';

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'scripts/templates/home.html',
                controller: 'homeCtrl'
            })
            .state('about', {
                url: '/about',
                templateUrl: 'scripts/templates/about.html',
                controller: 'aboutCtrl'
            });

        $urlRouterProvider.otherwise('/');
    }]);