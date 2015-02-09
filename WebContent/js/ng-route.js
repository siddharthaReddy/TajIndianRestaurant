
var myapp = angular.module('myapp',['ngRoute']);

myapp.config(function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl: 'home.html',
		controller: 'HomeController'
	})
	.when('/menu',{
		templateUrl: 'menu.html',
		controller: 'MenuController'
	})
	.when('/gallery',{
		templateUrl: 'gallery.html',
		controller: 'GalleryController'
	})
	.when('/contact',{
		templateUrl: 'contact.html',
		controller: 'ContactController'
	})
	.when('/about',{
		templateUrl: 'about.html',
		controller: 'AboutController'
	});
});

myapp.controller('HomeController', ['$scope','$log', function($scope, $log){
	$scope.name= "Home";
}]);
myapp.controller('MenuController', ['$scope','$log', function($scope, $log){
	$scope.name= "Menu";	
}]);
myapp.controller('GalleryController', ['$scope','$log', function($scope, $log){
	
}]);
myapp.controller('ContactController', ['$scope','$log', function($scope, $log){
	
}]);
myapp.controller('AboutController', ['$scope','$log', function($scope, $log){
	
}]);