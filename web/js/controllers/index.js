 	var module = angular.module("blog",  [ 'ui.router']);
 	module.config(function($stateProvider,$urlRouterProvider){

 		$stateProvider
 			.state('index',{
                url:'/index',
                views: {
                    '': {
                        templateUrl: 'web/page/main.html',
                        controllers:'mainCtrl'
                    },
                    '@index': {
                        templateUrl: 'web/page/foot.html',
                        controllers:'footCtrl'
                    }
                }
            })
            .state('index.left',{
                url:'/left',
                templateUrl:'web/page/left.html',
                controllers:'leftCtrl'
            })
            .state('index.right',{
                url:'/right',
                templateUrl:'web/page/right.html',
                controllers:'rightCtrl'
            })
	 		$urlRouterProvider.otherwise('/index');
 	}).controller('indexCtrl', function($scope){
 		$scope.hello = "thank you";
 	});

