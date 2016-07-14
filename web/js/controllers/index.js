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
            .state('left',{
                url:'/left',
                templateUrl:'web/page/left.html',
                controllers:'leftCtrl'
            })
            .state('right',{
                url:'/right',
                templateUrl:'web/page/right.html',
                controllers:'rightCtrl'
            })

	 		$urlRouterProvider.otherwise('/index1');
 	}).controller('indexCtrl', function($scope){
 		$scope.hello = "thank you";
 	});

