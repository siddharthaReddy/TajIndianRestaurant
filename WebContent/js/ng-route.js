
var myapp = angular.module('myapp',['ngRoute','ui.bootstrap']);

myapp.config(function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl: 'pages/home.html',
		controller: 'HomeController'
	})
	.when('/menu',{
		templateUrl: 'menuitems.html',
		controller: 'MenuController'
	})
	.when('/gallery',{
		templateUrl: 'pages/gallery.html',
		controller: 'GalleryController'
	})
	.when('/contact',{
		templateUrl: 'pages/contact.html',
		controller: 'ContactController'
	})
	.when('/about',{
		templateUrl: 'pages/about.html',
		controller: 'AboutController'
	});
});

myapp.controller('HomeController', ['$scope',function($scope){
	$scope.name= "Home";
}]);

myapp.controller('MenuController', ['$scope',"$http", function($scope,$http){
	$http.get("menu.json")
    .success(function(response) {$scope.data = response;});
}]);
	
myapp.controller('GalleryController', ['$scope',function($scope){
	
}]);

myapp.controller('ContactController', ['$scope',function($scope){
	
}]);

myapp.controller('AboutController', ['$scope',function($scope){
	
}]);

