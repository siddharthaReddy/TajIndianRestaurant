
var myapp = angular.module('myapp',['ngRoute','myAppControllers','ui.bootstrap']);

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



