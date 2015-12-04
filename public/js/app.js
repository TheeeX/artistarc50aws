//angular.module('myApp', ['ngResource']);

var myApp = angular.module('myApp', [
	'ngRoute',
    'ui.bootstrap',
    'ngResource',
    'ngAnimate',
    'chart.js']).
	config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
		$routeProvider.when('/page1', {templateUrl: 'partials/page1.ejs', controller: 'page1Controller'});
		$routeProvider.when('/page2', {templateUrl: 'partials/page2.ejs'});
        
        $routeProvider.when('/test', {templateUrl: 'partials/test.ejs', controller: 'testController'});
        
        $routeProvider.when('/user', {templateUrl: 'partials/user.ejs', controller: 'userController'});
        $routeProvider.when('/edit', {templateUrl: 'partials/edit.ejs', controller: 'aboutController'});
        $routeProvider.when('/analytics', {templateUrl: 'partials/analytics.ejs', controller: 'analyticsController'});
        
        
        $routeProvider.when('/troupe/:userName', {templateUrl: '../partials/troupe.ejs', controller: 'troupeProfileCtrl'});
        
		$routeProvider.otherwise({redirectTo: '/test'});

		$locationProvider.html5Mode({enabled: true, requireBase: false});

	}])

    .filter('startFrom', function(){
        return function(data, start){
            return data.slice(start);
        }
    });
