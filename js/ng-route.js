
var myapp = angular.module('myapp',['ngRoute','myAppControllers','ui.bootstrap']);

myapp.config(function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl: 'view/home.html',
		controller: 'HomeController'
	})
	.when('/menu',{
		templateUrl: 'view/menu.html',
		controller: 'MenuController'
	})
	.when('/gallery',{
		templateUrl: 'view/gallery.html',
		controller: 'GalleryController'
	})
	.when('/contact',{
		templateUrl: 'view/contact.html',
		controller: 'ContactController'
	})
	.when('/about',{
		templateUrl: 'view/about.html',
		controller: 'AboutController'
	});
});



