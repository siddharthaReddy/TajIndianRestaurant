
var myapp = angular.module('myapp',['ngRoute','ui.bootstrap']);

myapp.config(function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl: 'pages/home.html',
		controller: 'HomeController'
	})
	.when('/menu',{
		templateUrl: 'pages/menu.html',
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

myapp.controller('HomeController', ['$scope','$log', function($scope, $log){
	 $scope.myInterval = 5000;
	  var slides = $scope.slides = [
	  {image:'images/sliderImages/chicken.jpg',text:'Tandoori Chicken'},
	  {image:'images/sliderImages/dessert.jpg',text:'Desserts and Snacks'},
	  {image:'images/sliderImages/tiffins.jpg',text:'South Indian Tiffins'}];
	$log.log("log test");
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

