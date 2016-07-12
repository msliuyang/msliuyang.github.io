 	var module = angular.module("blog",  [ 'ui.router']);
 	module.config(function($stateProvider,$urlRouterProvider){

 		$stateProvider
 			.state('index1',{
				url:'/index1',
				views: {
					'': {
					    templateUrl: 'web/page/main.html',
                        controllers:'mainCtrl'
					}
				}
	 		})
            .state('web',{
                url:'/web',
                templateUrl:'web/page/left.html',
                controllers:'leftCtrl'
            })

	 		$urlRouterProvider.otherwise('/index1');
 	}).controller('indexCtrl', function($scope){
 		$scope.hello = "thank you";
 	});

